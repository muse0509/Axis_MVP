"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, TrendingUp, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

interface VaultCardProps {
  title: string;
  symbol: string;
  creator: string;
  contract: string;
  tvl: number;
  apy: number;
  createdAt: string; 
  imageUrl?: string; 
  type: "Official" | "Community";
}

export function VaultCard({ title, symbol, creator, contract, tvl, apy, createdAt, imageUrl, type }: VaultCardProps) {
  const router = useRouter();

  // シンボルが空の場合のフォールバック
  const safeSymbol = symbol && symbol.length > 0 ? symbol : "?";
  const displayChar = safeSymbol[0];

  return (
    <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-emerald-500/30">
      
      {/* 背景の装飾 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            
            {/* アイコン表示ロジック修正: imageUrl優先 -> なければsymbol頭文字 */}
            {imageUrl ? (
              <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden shadow-inner bg-black shrink-0">
                <img src={imageUrl} alt={safeSymbol} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center text-xl font-bold font-serif text-emerald-500 shadow-inner shrink-0">
                {displayChar}
              </div>
            )}

            <div className="min-w-0">
              <h3 className="text-lg font-bold text-white font-serif tracking-wide truncate pr-2">{title || "Unknown Vault"}</h3>
              <div className="flex items-center gap-1 text-xs text-neutral-400">
                <span className="truncate">by {creator ? (creator === 'Axis Team' ? 'Axis Team' : creator.slice(0, 4) + '...' + creator.slice(-4)) : "Unknown"}</span>
                {type === "Official" && (
                  <Badge variant="secondary" className="bg-emerald-950/30 text-emerald-400 border-emerald-500/20 text-[10px] h-4 px-1 shrink-0">
                    Official
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-right shrink-0">
             <div className="text-sm text-neutral-500">APY</div>
             <div className="text-xl font-bold text-emerald-400 font-serif">{apy}%</div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 my-4 p-3 bg-black/20 rounded-lg border border-white/5">
          <div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">TVL</div>
            <div className="text-base font-medium text-white font-serif">${tvl?.toLocaleString() || "0"}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Created</div>
            <div className="text-sm font-medium text-neutral-300 flex items-center justify-end gap-1">
              <Clock size={12} /> {createdAt}
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="flex items-center justify-between text-xs text-neutral-500 bg-neutral-900/50 p-2 rounded border border-white/5 mb-4">
          <span className="font-mono">{contract ? (contract.slice(0, 6) + '...' + contract.slice(-6)) : "No Contract"}</span>
          <button className="hover:text-white transition-colors" onClick={(e) => {
            e.stopPropagation();
            if(contract) navigator.clipboard.writeText(contract);
          }}>
            <Copy size={12} />
          </button>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
            className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all font-serif w-full"
            onClick={() => router.push(`/vault/${contract}`)} 
          >
            View Details
        </Button>
      </CardFooter>
    </Card>
  );
}