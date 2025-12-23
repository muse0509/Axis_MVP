"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAxisStore } from "@/app/store/useAxisStore";
import { Loader2, Wallet } from "lucide-react";
import { useWallet } from '@solana/wallet-adapter-react';

// ★変更点: iconUrl をローカルパスに変更
const WALLETS = [
  { 
    id: 'Phantom',
    name: 'Phantom', 
    iconUrl: '/wallet/phantom.svg', // public/wallets/phantom.png を参照
    fallback: 'PH'
  },
  { 
    id: 'Solflare',
    name: 'Solflare', 
    iconUrl: '/wallet/solflare.svg',
    fallback: 'SF'
  },
  { 
    id: 'Backpack',
    name: 'Backpack', 
    iconUrl: '/wallet/backpack.png',
    fallback: 'BP'
  },
  { 
    id: 'OKX Wallet',
    name: 'OKX Wallet', 
    iconUrl: '/wallet/okx.png',
    fallback: 'OK'
  },
];

export function WalletSelector() {
    // AxisStoreではなく、本物のWallet Adapterの状態を使う
    const { select, connect, connected, connecting: isAdapterConnecting, wallet } = useWallet();
    const { connectWallet: syncStoreWallet, isConnected: isStoreConnected } = useAxisStore();
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);
  
    // ★重要: 本物の接続状態が変わったら、AxisStore側も同期させる
    useEffect(() => {
      if (connected && wallet) {
        // Storeの接続状態を更新 (Addressなどは後でStore側でuseWalletから取るように改修するか、ここで渡す)
        syncStoreWallet('Phantom'); // 仮で渡す（実際はAdapterが管理）
        setIsOpen(false);
      }
    }, [connected, wallet, syncStoreWallet]);
  
    const handleConnect = async (walletName: string) => {
      setSelectedWalletId(walletName);
      
      // 1. ウォレットを選択 (Adapter内部でセットされる)
      select(walletName as any);
      
      // 2. 接続処理 (一部ウォレットはselectだけで自動接続しようとするが、明示的にconnectを呼ぶのが安全)
      // Note: select()は同期処理だが、非同期のconnect()はuseEffectやイベントリスナーで拾うのが一般的
      // ここでは単純にselectするだけで、AdapterのautoConnect等が動くのを期待するか、
      // ユーザーインタラクションとしてconnect()を呼ぶ
    };
  
    // すでに接続済みなら何も表示しない (Navbar等でアドレス表示するため)
    if (connected) return null;
  
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="font-bold bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]">
             <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[400px] bg-[#0A0A0A] border-neutral-800 text-white p-6 shadow-2xl shadow-black">
          <DialogHeader className="mb-4 text-left space-y-1">
            <DialogTitle className="text-xl font-bold text-white tracking-tight">Connect Wallet</DialogTitle>
            <DialogDescription className="text-neutral-500 text-sm">
              Select your preferred Solana wallet to continue.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-3">
            {WALLETS.map((w) => (
              <button
                key={w.id}
                disabled={isAdapterConnecting && selectedWalletId === w.id}
                onClick={() => handleConnect(w.id)}
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-600 transition-all duration-200 disabled:opacity-50 active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border border-neutral-800 bg-black rounded-lg">
                    <AvatarImage src={w.iconUrl} alt={w.name} className="object-contain p-1" />
                    <AvatarFallback className="text-xs font-bold bg-neutral-900 text-neutral-400 rounded-lg">
                      {w.fallback}
                    </AvatarFallback>
                  </Avatar>
                  
                  <span className="font-bold text-lg text-neutral-300 group-hover:text-white transition-colors">
                    {w.name}
                  </span>
                </div>
                
                {/* 接続中のローディング表示 */}
                {isAdapterConnecting && selectedWalletId === w.id ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-white transition-colors" />
                )}
              </button>
            ))}
          </div>
  
          <div className="mt-4 text-center text-[10px] text-neutral-600 uppercase tracking-widest">
            Secured by Axis Protocol
          </div>
        </DialogContent>
      </Dialog>
    );
  }