"use client";

import { useState } from "react";
import { Check, ChevronsUpDown, Search, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useAxisStore } from "@/app/store/useAxisStore";
import { Token } from "@/app/data/mockData";

interface TokenSelectorProps {
  selectedTokens: Token[];
  onSelect: (token: Token) => void;
  onRemove: (address: string) => void;
}

export function TokenSelector({ selectedTokens, onSelect, onRemove }: TokenSelectorProps) {
  const { tokenList, isLoadingTokens } = useAxisStore();
  const [open, setOpen] = useState(false);

  // 選択済みかどうか判定
  const isSelected = (address: string) => selectedTokens.some(t => t.address === address);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-400">Add Assets (Max 10)</label>
        
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between bg-neutral-900 border-neutral-700 hover:bg-neutral-800"
              disabled={selectedTokens.length >= 10}
            >
              {selectedTokens.length >= 10 
                ? "Max assets reached" 
                : "Select token..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-0 bg-neutral-900 border-neutral-800">
            <Command className="bg-transparent">
              <CommandInput placeholder="Search symbol or name..." className="text-white" />
              <CommandList>
                {isLoadingTokens && <div className="p-4 text-sm text-neutral-500 text-center">Loading tokens...</div>}
                <CommandEmpty>No token found.</CommandEmpty>
                <CommandGroup heading="Popular Tokens">
                  {tokenList.slice(0, 50).map((token) => ( // パフォーマンスのため上位50件表示
                    <CommandItem
                      key={token.address}
                      value={`${token.symbol} ${token.name}`} // 検索対象
                      onSelect={() => {
                        if (!isSelected(token.address)) {
                          onSelect(token);
                          setOpen(false);
                        }
                      }}
                      className={cn(
                        "cursor-pointer aria-selected:bg-neutral-800",
                        isSelected(token.address) && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <div className="flex items-center gap-3 w-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={token.logoURI} alt={token.symbol} className="w-6 h-6 rounded-full" />
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{token.symbol}</span>
                          <span className="text-xs text-neutral-500">{token.name}</span>
                        </div>
                        {isSelected(token.address) && <Check className="ml-auto h-4 w-4 text-emerald-500" />}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Selected Tokens Tags */}
      <div className="flex flex-wrap gap-2">
        {selectedTokens.map((token) => (
          <Badge 
            key={token.address} 
            variant="secondary" 
            className="pl-2 pr-1 py-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center gap-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={token.logoURI} alt="" className="w-4 h-4 rounded-full" />
            <span>{token.symbol}</span>
            <button 
              onClick={() => onRemove(token.address)}
              className="ml-1 hover:bg-neutral-600 rounded-full p-0.5 transition-colors"
            >
              <Plus className="h-3 w-3 rotate-45" />
            </button>
          </Badge>
        ))}
        {selectedTokens.length === 0 && (
          <span className="text-sm text-neutral-600 italic">No assets selected yet.</span>
        )}
      </div>
    </div>
  );
}