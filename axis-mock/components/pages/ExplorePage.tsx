"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { VaultCard } from "@/components/dashboard/VaultCard";
import { useAxisStore } from "@/app/store/useAxisStore";
import { Loader2, Inbox, Sparkles, Plus } from "lucide-react";

// 経過時間を表示するヘルパー関数
function getTimeAgo(timestamp?: number) {
  if (!timestamp) return "Just now";
  const seconds = Math.floor(Date.now() / 1000) - timestamp;
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function ExplorePage() {
  const router = useRouter();
  const { vaults, fetchVaults } = useAxisStore();

  useEffect(() => {
    fetchVaults();
  }, [fetchVaults]);

  const sortedVaults = [...vaults].sort((a, b) => (b.created_at || 0) - (a.created_at || 0));
  const officialVaults = vaults.filter(v => v.creator === "Axis Team" || v.status === "OFFICIAL");
  const communityVaults = sortedVaults.filter(v => v.creator !== "Axis Team");

  return (
    <div className="space-y-8 pb-20 fade-in animate-in duration-700">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight">
            Market Overview
          </h1>
          <p className="text-neutral-400 font-serif italic text-lg">
            Discover and invest in the next generation of decentralized ETFs.
          </p>
        </div>

        {/* ★ Create Your ETF Button (Premium White/Silver Style) */}
        <Button 
          onClick={() => router.push('/create')}
          className="group relative h-14 px-10 rounded-full bg-white text-black font-serif font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] hover:bg-neutral-200 border border-white/50 transition-all duration-300 hover:-translate-y-1"
        >
          <Sparkles className="mr-2 h-5 w-5 text-neutral-600 group-hover:text-black transition-colors" />
          Create Your ETF
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-white/5 border border-white/10 p-1 mb-8">
          <TabsTrigger value="all" className="data-[state=active]:bg-emerald-900 data-[state=active]:text-emerald-100 font-serif w-32">
            All Vaults
          </TabsTrigger>
          <TabsTrigger value="new" className="data-[state=active]:bg-emerald-900 data-[state=active]:text-emerald-100 font-serif w-32">
            New 24h
          </TabsTrigger>
          <TabsTrigger value="official" className="data-[state=active]:bg-indigo-900 data-[state=active]:text-indigo-100 font-serif w-32">
            Official
          </TabsTrigger>
        </TabsList>

        {/* 1. All Vaults */}
        <TabsContent value="all" className="space-y-6 focus-visible:outline-none">
          {communityVaults.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-xl bg-white/5 group cursor-pointer hover:border-white/30 transition-colors" onClick={() => router.push('/create')}>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Plus className="text-neutral-500 group-hover:text-white" size={32} />
              </div>
              <p className="text-neutral-400 font-serif text-lg mb-2">No ETFs found.</p>
              <p className="text-white font-bold text-sm uppercase tracking-widest">Create the first one</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityVaults.map((vault) => (
                <VaultCard 
                  key={vault.id}
                  title={vault.name} 
                  symbol={vault.symbol} 
                  creator={vault.creator} 
                  contract={vault.id}
                  tvl={vault.min_liquidity || 0}
                  apy={vault.apy || 0} 
                  createdAt={getTimeAgo(vault.created_at)}
                  imageUrl={vault.image_url}
                  type="Community"
                />
              ))}
            </div>
          )}
        </TabsContent>

        {/* 2. New Content */}
        <TabsContent value="new" className="focus-visible:outline-none">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityVaults.length === 0 ? (
                 <div className="col-span-3 text-neutral-500 font-serif text-center py-10">No new ETFs in last 24h.</div>
              ) : (
                communityVaults.map((vault) => (
                  <VaultCard 
                    key={vault.id}
                    title={vault.name} 
                    symbol={vault.symbol} 
                    creator={vault.creator} 
                    contract={vault.id}
                    tvl={vault.min_liquidity || 0}
                    apy={vault.apy || 0} 
                    createdAt={getTimeAgo(vault.created_at)}
                    imageUrl={vault.image_url}
                    type="Community"
                  />
                ))
              )}
           </div>
        </TabsContent>

        {/* 3. Official Content */}
        <TabsContent value="official" className="focus-visible:outline-none">
           {officialVaults.length === 0 ? (
             <div className="text-neutral-500 font-serif text-center py-10 bg-white/5 rounded-xl border border-white/5">
               Official ETFs coming soon.
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {officialVaults.map((vault) => (
                  <VaultCard 
                    key={vault.id}
                    title={vault.name} 
                    symbol={vault.symbol} 
                    creator="Axis Team" 
                    contract={vault.id}
                    tvl={vault.min_liquidity || 0}
                    apy={vault.apy || 0} 
                    createdAt={getTimeAgo(vault.created_at)}
                    imageUrl={vault.image_url}
                    type="Official"
                  />
               ))}
             </div>
           )}
        </TabsContent>
      </Tabs>
    </div>
  );
}