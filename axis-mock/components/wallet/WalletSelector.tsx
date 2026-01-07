"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAxisStore } from "@/app/store/useAxisStore";
import { Loader2, Wallet } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";

// ==========================================
// 定数定義
// ==========================================

/**
 * ウォレット情報
 */
interface WalletInfo {
  /** ウォレットID（識別子） */
  id: string;
  /** 表示名 */
  name: string;
  /** アイコンURL */
  iconUrl: string;
  /** フォールバック表示文字 */
  fallback: string;
}

/**
 * サポートされているウォレットのリスト
 */
const WALLETS: WalletInfo[] = [
  {
    id: "Phantom",
    name: "Phantom",
    iconUrl: "/wallet/phantom.svg",
    fallback: "PH",
  },
  {
    id: "Solflare",
    name: "Solflare",
    iconUrl: "/wallet/solflare.svg",
    fallback: "SF",
  },
  {
    id: "Backpack",
    name: "Backpack",
    iconUrl: "/wallet/backpack.png",
    fallback: "BP",
  },
  {
    id: "OKX Wallet",
    name: "OKX Wallet",
    iconUrl: "/wallet/okx.png",
    fallback: "OK",
  },
];

// ==========================================
// メインコンポーネント
// ==========================================

/**
 * WalletSelector
 * 
 * Solanaウォレットを選択して接続するためのコンポーネント
 * 
 * 機能:
 * - モーダルダイアログでウォレット選択
 * - サポートされている複数のウォレットから選択可能
 * - 接続中のローディング状態表示
 * - 接続成功後に自動でモーダルを閉じる
 * - 既に接続されている場合は非表示
 * 
 * @returns WalletSelectorコンポーネント
 */
export function WalletSelector() {
  // ==========================================
  // フックとステート
  // ==========================================
  
  const { 
    select, 
    connect, 
    connected, 
    connecting: isAdapterConnecting, 
    wallet 
  } = useWallet();
  
  const { 
    connectWallet: syncStoreWallet, 
    isConnected: isStoreConnected 
  } = useAxisStore();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);

  // ==========================================
  // エフェクト
  // ==========================================

  /**
   * ウォレット接続成功時の処理
   * グローバルストアに接続情報を同期し、モーダルを閉じる
   */
  useEffect(() => {
    if (connected && wallet) {
      // デフォルトでPhantomとして同期（実際のウォレット名を使用する場合は修正が必要）
      syncStoreWallet("Phantom");
      setIsOpen(false);
      setSelectedWalletId(null);
    }
  }, [connected, wallet, syncStoreWallet]);

  // ==========================================
  // イベントハンドラー
  // ==========================================

  /**
   * ウォレット接続ハンドラー
   * 指定されたウォレットへの接続を試行
   * 
   * @param walletName - 接続するウォレットの名前
   */
  const handleConnect = async (walletName: string) => {
    setSelectedWalletId(walletName);
    
    // Wallet Adapterのselect関数を呼び出し
    // 型エラー回避のためany型にキャスト
    select(walletName as any);
  };

  // ==========================================
  // レンダリング
  // ==========================================

  // 既に接続されている場合は何も表示しない
  if (connected) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* トリガーボタン */}
      <DialogTrigger asChild>
        <Button className="bg-white font-bold text-black shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)] transition-all hover:bg-neutral-200">
          <Wallet className="mr-2 h-4 w-4" /> 
          Connect Wallet
        </Button>
      </DialogTrigger>

      {/* モーダルコンテンツ */}
      <DialogContent className="border-neutral-800 bg-[#0A0A0A] p-6 text-white shadow-2xl shadow-black sm:max-w-[400px]">
        {/* ヘッダー */}
        <DialogHeader className="mb-4 space-y-1 text-left">
          <DialogTitle className="text-xl font-bold tracking-tight text-white">
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-sm text-neutral-500">
            Select your preferred Solana wallet to continue.
          </DialogDescription>
        </DialogHeader>

        {/* ウォレットリスト */}
        <div className="flex flex-col gap-3">
          {WALLETS.map((w) => {
            const isCurrentlyConnecting = isAdapterConnecting && selectedWalletId === w.id;
            
            return (
              <button
                key={w.id}
                disabled={isCurrentlyConnecting}
                onClick={() => handleConnect(w.id)}
                className="group flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-900 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={`Connect to ${w.name}`}
              >
                <div className="flex items-center gap-4">
                  {/* ウォレットアイコン */}
                  <Avatar className="h-10 w-10 rounded-lg border border-neutral-800 bg-black">
                    <AvatarImage 
                      src={w.iconUrl} 
                      alt={w.name} 
                      className="object-contain p-1" 
                    />
                    <AvatarFallback className="rounded-lg bg-neutral-900 text-xs font-bold text-neutral-400">
                      {w.fallback}
                    </AvatarFallback>
                  </Avatar>

                  {/* ウォレット名 */}
                  <span className="text-lg font-bold text-neutral-300 transition-colors group-hover:text-white">
                    {w.name}
                  </span>
                </div>

                {/* ローディングまたはインジケーター */}
                {isCurrentlyConnecting ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-neutral-800 transition-colors group-hover:bg-white" />
                )}
              </button>
            );
          })}
        </div>

        {/* フッター */}
        <div className="mt-4 text-center text-[10px] tracking-widest text-neutral-600 uppercase">
          Secured by Axis Protocol
        </div>
      </DialogContent>
    </Dialog>
  );
}
