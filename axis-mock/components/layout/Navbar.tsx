"use client";

// ★ここが抜けていました
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WalletSelector } from "@/components/wallet/WalletSelector";
import { useAxisStore } from "@/app/store/useAxisStore";
import { AppSidebar } from "./AppSidebar";
import { useWallet } from "@solana/wallet-adapter-react";
import { PortfolioSheet } from "@/components/wallet/PortfolioSheet"; 
import { RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { SettingsDialog } from "@/components/settings/SettingsDialog";

export function Navbar() {
  const { usdcBalance, solBalance, fetchBalances, isFaucetLoading } = useAxisStore();
  const { connected, publicKey } = useWallet();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  const handleRefreshBalance = () => { fetchBalances(); };

  if (!isMounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-neutral-800">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <AppSidebar />
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-xl text-white hidden md:block tracking-tight">Axis</span>
          </Link>
        </div>

        {/* Right: Wallet & Balance */}
        <div className="flex items-center gap-3">
        <SettingsDialog />
          
          {/* Header Balance (Desktop) */}
          {connected && (
            <div className="hidden md:flex items-center gap-3 mr-2">
              <div className="flex flex-col items-end leading-none">
                <span className="text-sm font-bold text-white">{usdcBalance.toLocaleString()} USDC</span>
                <span className="text-[10px] text-neutral-500 font-mono">Devnet</span>
              </div>
              <div className="w-px h-8 bg-neutral-800 mx-1" />
              <div className="flex flex-col items-end leading-none">
                <span className="text-sm font-bold text-white">{solBalance.toLocaleString(undefined, { maximumFractionDigits: 3 })} SOL</span>
                <button onClick={handleRefreshBalance} disabled={isFaucetLoading} className="text-[10px] text-neutral-500 hover:text-white flex items-center gap-1">
                   <RefreshCw size={10} className={isFaucetLoading ? "animate-spin" : ""} /> Refresh
                </button>
              </div>
            </div>
          )}

          {!connected ? (
            <WalletSelector />
          ) : (
            <PortfolioSheet>
                <Button variant="outline" className="font-mono bg-neutral-900 border-neutral-800 hover:bg-neutral-800 text-white h-10 px-4 transition-all hover:border-emerald-500/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  {publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}
                </Button>
            </PortfolioSheet>
          )}
        </div>
      </div>
    </nav>
  );
}