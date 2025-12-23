"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings, RefreshCw, Wand2, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export function SettingsDialog() {
  const [selectedNFT, setSelectedNFT] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIcon, setGeneratedIcon] = useState<string | null>(null);

  // ダミーNFTデータ (本来はWalletから取得)
  const mockNFTs = [
    { id: "1", name: "Mad Lads #8420", url: "https://placehold.co/100x100/2a2a2a/FFF?text=ML" },
    { id: "2", name: "SMB #231", url: "https://placehold.co/100x100/4a4a4a/FFF?text=SMB" },
    { id: "3", name: "Claynosaurz", url: "https://placehold.co/100x100/6a6a6a/FFF?text=Clay" },
  ];

  const handleGenerate = () => {
    if (!selectedNFT) return;
    setIsGenerating(true);
    // AI生成のモック (3秒後に完了)
    setTimeout(() => {
      setGeneratedIcon("https://placehold.co/200x200/10b981/FFF?text=AXIS+AI"); // Axisカラーの生成画像
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <Settings size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-900/95 backdrop-blur border-neutral-800 text-white font-serif max-w-md">
        <DialogHeader>
          <DialogTitle>Settings & Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          
          {/* 1. RPC Node Settings */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">RPC Connection</h3>
            <div className="p-3 bg-black/40 rounded border border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm">Helius Devnet (High Speed)</span>
              </div>
              <Button variant="outline" size="sm" className="h-6 text-xs border-white/10 text-neutral-400">Change</Button>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* 2. AI Profile Picture */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
               <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                 <Wand2 size={14} className="text-purple-400" /> AI PFP Generator
               </h3>
               <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-[10px]">Beta</Badge>
            </div>
            
            <p className="text-xs text-neutral-500">
              Select an NFT from your wallet and let Axis AI reimagine it for our ecosystem.
            </p>

            {/* NFT Selector */}
            <div className="grid grid-cols-4 gap-2">
              {mockNFTs.map((nft) => (
                <div 
                  key={nft.id} 
                  onClick={() => { setSelectedNFT(nft.id); setGeneratedIcon(null); }}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${selectedNFT === nft.id ? "border-emerald-500 opacity-100" : "border-transparent opacity-60 hover:opacity-80"}`}
                >
                  <img src={nft.url} alt={nft.name} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>

            {/* Generate Button / Result */}
            {selectedNFT && !generatedIcon && (
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-900 to-indigo-900 border border-purple-500/30 text-purple-100 font-serif"
              >
                {isGenerating ? (
                  <><RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Generating Axis Style...</>
                ) : (
                  <><Wand2 className="mr-2 h-4 w-4" /> Generate AI Icon</>
                )}
              </Button>
            )}

            {/* Result Display */}
            {generatedIcon && (
              <div className="mt-4 p-4 bg-purple-950/20 rounded-xl border border-purple-500/20 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] overflow-hidden mb-3">
                  <img src={generatedIcon} alt="Generated" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-emerald-400 font-bold mb-2">Axis Identity Generated!</p>
                <div className="flex gap-2 justify-center">
                  <Button size="sm" variant="outline" className="text-xs h-7">Download</Button>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-7">Set as PFP</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}