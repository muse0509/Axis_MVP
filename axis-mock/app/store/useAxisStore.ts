import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Token, INITIAL_VAULTS, VaultStatus } from "../data/mockData";
import { toast } from "sonner";
import { getCachedTokenPrices } from "@/lib/jupiter-api";

// ==========================================
// 定数定義
// ==========================================

/** API Base URL */
const API_URL = "https://axis-api.yusukekikuta-05.workers.dev";

/** Solana Network */
const NETWORK = "devnet";

/** RPC Endpoint */
const RPC_ENDPOINT = clusterApiUrl(NETWORK);

/** Devnet USDC Mint Address */
const DEVNET_USDC_MINT = "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr";

/** モックの価格データ */
const MOCK_PRICES: Record<string, number> = {
  USDC: 1.0,
  USDT: 1.0,
  SOL: 145.5,
  BTC: 64200,
  ETH: 3400,
  JUP: 1.15,
  BONK: 0.000024,
  WIF: 3.2,
  POPCAT: 0.85,
};

// ==========================================
// 型定義
// ==========================================

// Solana接続インスタンス
const connection = new Connection(RPC_ENDPOINT, "confirmed");

/**
 * Vault情報
 */
export interface Vault {
  /** Vault ID */
  id: string;
  /** Vault名 */
  name: string;
  /** ティッカーシンボル */
  symbol: string;
  /** Total Value Locked */
  tvl: number;
  /** Annual Percentage Yield */
  apy: number;
  /** 画像URL */
  image_url?: string;
  /** 作成者アドレス */
  creator: string;
  /** Vaultのステータス */
  status?: VaultStatus | string;
  /** 説明 */
  description?: string;
  /** 戦略タイプ */
  strategy_type?: string;
  /** 管理手数料 */
  management_fee?: number;
  /** 最小流動性 */
  min_liquidity?: number;
  /** ポートフォリオ構成 */
  composition?: any[];
  /** 作成日時（タイムスタンプ） */
  created_at?: number;
}

/**
 * ユーザープロフィール情報
 */
export interface UserProfile {
  /** ユーザーID */
  id?: string;
  /** ユーザー名 */
  username: string;
  /** 自己紹介 */
  bio: string;
  /** プロフィール画像URL */
  pfpUrl: string;
  /** バッジリスト */
  badges: string[];
}

/**
 * Axisアプリケーションのグローバルストア
 * Zustandを使用した状態管理
 */
interface AxisStore {
  user: any | null;
  userProfile: UserProfile | null;
  email: string | null;
  inviteCode: string | null;
  walletAddress: string | null;
  isRegistered: boolean;
  isConnected: boolean;
  walletProvider: any | null;
  referralCode: string | null;

  vaults: Vault[];
  usdcBalance: number;
  solBalance: number;
  positions: any[];
  claimedWallets: string[];

  isSidebarOpen: boolean;
  isFaucetLoading: boolean;
  isLoadingTokens: boolean;
  tokenList: Token[];
  isLoading: boolean;

  connectWallet: (address: string) => Promise<void>;
  disconnectWallet: () => void;

  registerUser: (
    email: string,
    code: string,
    wallet: string
  ) => Promise<{ success: boolean; message?: string }>;
  login: (userData: any) => void;

  logout: () => void;

  fetchBalances: () => Promise<void>;
  claimFaucet: () => Promise<void>;

  fetchVaults: () => Promise<void>;
  createVault: (vaultData: any) => Promise<boolean>;
  depositToVault: (vaultId: string, amountUSDC: number) => void;
  toggleVaultStatus: (vaultId: string) => void;

  fetchTokenList: () => Promise<void>;
  toggleSidebar: (isOpen: boolean) => void;

  registerWithWallet: () => Promise<boolean>;

  fetchUserProfile: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<boolean>;
  addBadge: (badgeId: string) => void;
}

// ==========================================
// ヘルパー関数
// ==========================================

/**
 * トークンのモック価格を取得
 * @param symbol - トークンシンボル
 * @returns 価格（存在しない場合はランダム値）
 */
const getMockPrice = (symbol: string): number => {
  return MOCK_PRICES[symbol] || Math.random() * 10 + 0.1;
};

// ==========================================
// ストア定義
// ==========================================

export const useAxisStore = create<AxisStore>()(
  persist(
    (set, get) => ({
      user: null,
      email: null,
      userProfile: null,
      inviteCode: null,
      walletAddress: null,
      isRegistered: false,
      isConnected: false,
      walletProvider: null,
      referralCode: null,

      vaults: INITIAL_VAULTS,
      usdcBalance: 0,
      solBalance: 0,
      positions: [],
      claimedWallets: [],

      isSidebarOpen: false,
      isFaucetLoading: false,
      isLoadingTokens: false,
      isLoading: false,
      tokenList: [],

      connectWallet: async (address) => {
        set({ isConnected: true, walletAddress: address });
        await get().fetchBalances();
        await get().fetchUserProfile();
      },

      disconnectWallet: () => {
        set({
          isConnected: false,
          walletAddress: null,
          walletProvider: null,
          usdcBalance: 0,
          solBalance: 0,
        });
      },

      fetchBalances: async () => {
        const { walletAddress } = get();
        if (!walletAddress) return;

        try {
          const pubkey = new PublicKey(walletAddress);
          const solBalanceLamports = await connection.getBalance(pubkey);
          const solBalance = solBalanceLamports / LAMPORTS_PER_SOL;

          let usdcBalance = 0;
          try {
            const tokenAccounts = await connection.getParsedTokenAccountsByOwner(pubkey, {
              programId: TOKEN_PROGRAM_ID,
            });
            const usdcAccount = tokenAccounts.value.find(
              (account) => account.account.data.parsed.info.mint === DEVNET_USDC_MINT
            );
            if (usdcAccount) {
              usdcBalance = usdcAccount.account.data.parsed.info.tokenAmount.uiAmount || 0;
            }
          } catch (e) {}
          set({ solBalance, usdcBalance });
        } catch (error) {
          console.error("Failed to fetch balances:", error);
        }
      },

      claimFaucet: async () => {
        const { walletAddress, fetchBalances, claimedWallets } = get();
        if (!walletAddress) return;

        if (claimedWallets.includes(walletAddress)) {
          alert("You have already claimed the faucet for this wallet.");
          return;
        }

        set({ isFaucetLoading: true });

        try {
          const res = await fetch(`${API_URL}/claim`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ wallet_address: walletAddress }),
          });
          const data = await res.json().catch(() => null);

          if (!res.ok || !data?.success) {
            throw new Error(data?.error || "Faucet API failed");
          }

          set((state) => ({
            claimedWallets: [...state.claimedWallets, walletAddress],
          }));

          setTimeout(async () => {
            await fetchBalances();
          }, 2000);

          toast.success("1,000 USDC sent to your Devnet wallet!");
        } catch (error) {
          console.error("Faucet Error:", error);
          toast.error("Faucet failed. Please try again.");
          await fetchBalances();
        } finally {
          set({ isFaucetLoading: false });
        }
      },

      registerUser: async (email, inviteCode, address) => {
        try {
          const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              wallet_address: address,
              invite_code_used: inviteCode,
            }),
          });

          if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            return { success: false, message: errData.error || "Registration failed" };
          }

          const data = await res.json();

          set({
            isRegistered: true,
            user: data.user,
            email: email,
            inviteCode: inviteCode,
            walletAddress: address,
            isConnected: true,
            referralCode: data.user?.invite_code || null,
            usdcBalance: 0,
            solBalance: 0,
          });

          await get().fetchBalances();
          return { success: true };
        } catch (error) {
          console.error("API Error:", error);
          return { success: false, message: "Connection to server failed" };
        }
      },

      login: (userData: any) => {
        set({
          isRegistered: true,
          user: userData,
          email: userData.email,
          walletAddress: userData.wallet_address || get().walletAddress,
          referralCode: userData.invite_code,
        });
      },

      logout: () => {
        set({
          isRegistered: false,
          user: null,
          email: null,
          inviteCode: null,
          referralCode: null,
        });
      },

      fetchVaults: async () => {
        set({ isLoading: true });
        try {
          const res = await fetch(`${API_URL}/vaults`);
          if (res.ok) {
            const data = await res.json();
            set({ vaults: data });
          }
        } catch (e) {
          console.error("Failed to fetch vaults", e);
        } finally {
          set({ isLoading: false });
        }
      },

      createVault: async (vaultData) => {
        try {
          const res = await fetch(`${API_URL}/vaults`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vaultData),
          });

          if (res.ok) {
            await get().fetchVaults();
            return true;
          } else {
            const err = await res.json();
            console.error("Backend Error:", err);
            return false;
          }
        } catch (e) {
          console.error("Network/Client Error:", e);
          return false;
        }
      },

      depositToVault: (vaultId, amountUSDC) => {
        const { usdcBalance, vaults } = get();
        const targetVault = vaults.find((v) => v.id === vaultId);
        if (!targetVault || usdcBalance < amountUSDC) return;

        const updatedVaults = vaults.map((v) =>
          v.id === vaultId ? { ...v, tvl: v.tvl + amountUSDC } : v
        );

        set((state) => ({
          vaults: updatedVaults,
          usdcBalance: state.usdcBalance - amountUSDC,
          positions: [
            ...state.positions,
            { vaultId, lpAmount: amountUSDC, entryValue: amountUSDC },
          ],
        }));
      },

      toggleVaultStatus: (vaultId) => {
        set((state) => ({
          vaults: state.vaults.map((v) => {
            if (v.id !== vaultId) return v;
            let next: VaultStatus | string = v.status || "BOOTSTRAP";
            if (v.status === "BOOTSTRAP") next = "PUBLIC";
            else if (v.status === "PUBLIC") next = "AUCTION_LIVE";
            else if (v.status === "AUCTION_LIVE") next = "PUBLIC";
            return { ...v, status: next };
          }),
        }));
      },

      fetchUserProfile: async () => {
        const { walletAddress } = get();
        if (!walletAddress) return;

        try {
          const res = await fetch(`${API_URL}/user?wallet=${walletAddress}`);
          if (res.ok) {
            const data = await res.json();

            const isRegistered = !!(data && data.username);

            set({
              isRegistered,
              userProfile: {
                username: data.username || "",
                bio: data.bio || "",
                pfpUrl: data.pfpUrl || "",
                badges: data.badges || [],
              },
            });
          } else {
            set({ isRegistered: false });
          }
        } catch (e) {
          console.error("Fetch profile failed:", e);
        }
      },

      registerWithWallet: async () => {
        const { walletAddress } = get();
        if (!walletAddress) return false;

        try {
          const res = await fetch(`${API_URL}/auth/social-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              provider: "solana",
              wallet_address: walletAddress,
            }),
          });

          const data = await res.json();
          if (data.success) {
            set({ isRegistered: true });
            return true;
          }
          return false;
        } catch (e) {
          console.error("Registration failed:", e);
          return false;
        }
      },

      updateUserProfile: async (data) => {
        const { walletAddress, userProfile, isRegistered, registerWithWallet } = get();

        if (!walletAddress) {
          toast.error("Wallet not connected");
          return false;
        }

        if (!isRegistered) {
          console.log("User is Guest. Registering first...");
          const regSuccess = await registerWithWallet();

          if (!regSuccess) {
            toast.error("Failed to create account.");
            return false;
          }
        }

        const newProfile = { ...userProfile, ...data } as UserProfile;

        try {
          const res = await fetch(`${API_URL}/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              wallet_address: walletAddress,
              name: newProfile.username,
              bio: newProfile.bio,
              avatar_url: newProfile.pfpUrl,
              badges: newProfile.badges,
            }),
          });

          const result = await res.json();

          if (!res.ok) {
            console.error("Update failed:", result);
            toast.error(result.error || "Failed to update profile");
            return false;
          }

          set({ userProfile: newProfile, isRegistered: true });

          set((state) => ({
            user: state.user
              ? { ...state.user, name: newProfile.username, avatar_url: newProfile.pfpUrl }
              : state.user,
          }));

          return true;
        } catch (e) {
          console.error("Network Error:", e);
          toast.error("Connection error.");
          return false;
        }
      },

      addBadge: (badgeId) => {
        const { userProfile } = get();
        if (!userProfile) return;
        if (!userProfile.badges.includes(badgeId)) {
          const newBadges = [...userProfile.badges, badgeId];
          set({ userProfile: { ...userProfile, badges: newBadges } });
        }
      },

      fetchTokenList: async () => {
        const { tokenList } = get();
        if (tokenList.length > 0) return;

        set({ isLoadingTokens: true });
        try {
          // APIからトークンリストを取得
          const response = await fetch(`${API_URL}/tokens`);
          if (!response.ok) throw new Error("Failed to fetch tokens");

          const data = await response.json();
          
          // Jupiter APIから実際の価格を取得
          let jupiterPrices: Record<string, number> = {};
          try {
            jupiterPrices = await getCachedTokenPrices();
          } catch (e) {
            console.error("Failed to fetch Jupiter prices:", e);
          }

          // トークンリストに価格を適用（安全なアクセス）
          const formattedTokens: Token[] = data
            .filter((t: any) => t && t.symbol) // null/undefinedと無効なデータを除外
            .map((t: any) => ({
              ...t,
              price: jupiterPrices[t.symbol?.toUpperCase?.()] || getMockPrice(t.symbol || "UNKNOWN"),
            }));

          set({ tokenList: formattedTokens, isLoadingTokens: false });
        } catch (error) {
          console.error(error);
          set({ isLoadingTokens: false });
        }
      },

      toggleSidebar: (isOpen) => set({ isSidebarOpen: isOpen }),
    }),
    {
      name: "axis-storage-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isRegistered: state.isRegistered,
        user: state.user,
        email: state.email,
        userProfile: state.userProfile,
        referralCode: state.referralCode,
        walletAddress: state.walletAddress,
        isConnected: state.isConnected,
        usdcBalance: state.usdcBalance,
        solBalance: state.solBalance,
        positions: state.positions,
        vaults: state.vaults,
        tokenList: state.tokenList,
        claimedWallets: state.claimedWallets,
      }),
    }
  )
);
