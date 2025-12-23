"use client";

import { useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"; // SheetTitle, SheetHeaderを追加
import { Button } from "@/components/ui/button";
import { useAxisStore } from "@/app/store/useAxisStore";
import { useWallet } from "@solana/wallet-adapter-react";
import { ExternalLink, Coins, Wallet, TrendingUp, ShieldCheck, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function PortfolioSheet({ children }: { children: React.ReactNode }) {
  const { 
    connectWallet,
    usdcBalance, 
    solBalance, 
    positions, 
    vaults, 
    claimFaucet, 
    isFaucetLoading, 
    disconnectWallet,
    claimedWallets,
    fetchBalances // 残高取得アクションを追加
  } = useAxisStore();
  
  const { publicKey, disconnect } = useWallet();

  // サイドバーが開かれるたび、またはWalletが変わるたびに残高を再取得
  useEffect(() => {
    if (!publicKey) return;
  
    // ✅ storeのwalletAddressを確実にセット（これが重要）
    connectWallet(publicKey.toString()); // connectWallet内で fetchBalances() も呼ばれる
  }, [publicKey, connectWallet]);

  const handleDisconnect = async () => {
    await disconnect();
    disconnectWallet();
  };

  const handleClaim = async () => {
    if (!publicKey) return;
    
    try {
      await claimFaucet();
      // 成功メッセージはStore内のalertまたはtoastで処理されるが、念のためここでもUI更新を意識
      fetchBalances(); 
    } catch (e) {
      console.error("Claim Error:", e);
      toast.error("Failed to claim USDC. Please try again.");
    }
  };

  // 自分のVaultをフィルタリング
  const myVaults = vaults.filter(v => v.creator === publicKey?.toString());
  
  // すでにFaucetを使ったか判定
  const hasClaimed = publicKey ? claimedWallets.includes(publicKey.toString()) : false;

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="w-full sm:w-[400px] border-l border-white/10 p-0 text-white flex flex-col bg-black/80 backdrop-blur-xl font-serif z-[100]"
      >
        {/* --- 修正: アクセシビリティ対応 (SheetHeader & SheetTitle) --- */}
        <SheetHeader className="sr-only">
          <SheetTitle>Wallet Portfolio</SheetTitle>
        </SheetHeader>

        {/* Header UI */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Wallet size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base font-serif tracking-wide truncate max-w-[150px]">
                {publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : "Not Connected"}
              </span>
              <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-wider">Connected via Solana</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleDisconnect} className="text-red-400 hover:text-red-300 hover:bg-red-950/20 h-8 font-sans text-xs">
            Disconnect
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* 1. Balance Section */}
          <div className="space-y-4">
            <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest font-sans">Total Balance</span>
            <div className="flex items-baseline gap-2">
              <h2 className="text-5xl font-bold text-white tracking-tight font-serif">
                {usdcBalance.toLocaleString()} <span className="text-lg text-neutral-500 font-normal">USDC</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400 font-mono">
               <span className="bg-white/10 border border-white/5 px-2 py-0.5 rounded text-xs text-neutral-300">
                 {solBalance.toFixed(3)} SOL
               </span>
            </div>

            {/* Faucet Button */}
            <div className="pt-4">
              <Button 
                onClick={handleClaim} 
                disabled={isFaucetLoading || hasClaimed}
                className={`w-full font-serif border shadow-lg transition-all h-12 ${
                  hasClaimed 
                    ? "bg-neutral-900 border-neutral-800 text-neutral-500 cursor-not-allowed" 
                    : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-white/10"
                }`}
              >
                {isFaucetLoading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                ) : hasClaimed ? (
                  "Faucet Already Claimed"
                ) : (
                  <><Coins className="mr-2 h-4 w-4 text-yellow-500" /> Get 1,000 USDC (Demo)</>
                )}
              </Button>
              {!hasClaimed && (
                <p className="text-[10px] text-neutral-600 mt-2 text-center font-sans">
                  *Available once per wallet on Devnet.
                </p>
              )}
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* 2. Active Positions */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-widest font-bold font-sans">
                <ShieldCheck size={14} /> Active Positions ({positions.length})
             </div>
             
             {positions.length === 0 ? (
                <div className="p-6 border border-dashed border-white/10 rounded-xl text-center text-neutral-500 text-sm font-serif bg-white/5">
                  No active positions yet.
                </div>
             ) : (
                <div className="space-y-3">
                  {positions.map((pos, idx) => {
                    const vault = vaults.find(v => v.id === pos.vaultId);
                    return (
                      <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors">
                        <div>
                          <p className="font-bold text-base text-white font-serif">{vault?.name || "Unknown Vault"}</p>
                          <p className="text-xs text-neutral-500 font-mono mt-1">Entry: ${pos.entryValue.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-emerald-400 border-emerald-500/20 bg-emerald-500/10 font-sans text-[10px]">
                            Active
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
             )}
          </div>

          {/* 3. My Created Vaults */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-widest font-bold font-sans">
                <TrendingUp size={14} /> My ETF ({myVaults.length})
             </div>

             {myVaults.length === 0 ? (
                <div className="p-6 border border-dashed border-white/10 rounded-xl text-center text-neutral-500 text-sm font-serif bg-white/5">
                  You haven't created any ETFs.
                </div>
             ) : (
                <div className="space-y-3">
                  {myVaults.map((vault) => (
                    <div key={vault.id} className="p-4 bg-white/5 border border-white/10 rounded-xl group hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                         <span className="font-bold text-white text-base font-serif">{vault.name}</span>
                         <Badge variant="outline" className="text-[10px] border-white/20 text-neutral-400 bg-black/40">
                           {vault.status || "Active"}
                         </Badge>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="text-xs text-neutral-500 font-sans">
                          TVL <span className="text-white ml-1 font-serif text-sm">${vault.tvl?.toLocaleString() || 0}</span>
                        </div>
                        <Button variant="link" size="sm" className="h-auto p-0 text-xs text-emerald-500 hover:text-emerald-400 font-sans">
                          Manage <ExternalLink size={10} className="ml-1"/>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
             )}
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}