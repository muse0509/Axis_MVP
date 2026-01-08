"use client";

import { useState, useEffect, useCallback } from "react";
import { getCachedTokenPrices, getTokenPricesBySymbol } from "@/lib/jupiter-api";

/**
 * トークン価格を取得するカスタムフック
 * Jupiter APIを使用してリアルタイムの価格を取得
 */
export function useTokenPrices(symbols?: string[]) {
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPrices = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      let fetchedPrices: Record<string, number>;
      
      if (symbols && symbols.length > 0) {
        // 特定のシンボルのみ取得
        fetchedPrices = await getTokenPricesBySymbol(symbols);
      } else {
        // 全トークンの価格を取得
        fetchedPrices = await getCachedTokenPrices();
      }

      setPrices(fetchedPrices);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Failed to fetch token prices:", err);
      setError("Failed to fetch prices");
    } finally {
      setIsLoading(false);
    }
  }, [symbols?.join(",")]);

  useEffect(() => {
    fetchPrices();

    // 60秒ごとに自動更新
    const interval = setInterval(fetchPrices, 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  /**
   * 特定のシンボルの価格を取得
   */
  const getPrice = useCallback(
    (symbol: string): number => {
      return prices[symbol.toUpperCase()] || 0;
    },
    [prices]
  );

  /**
   * 価格をフォーマットして表示
   */
  const formatPrice = useCallback(
    (symbol: string, decimals = 2): string => {
      const price = getPrice(symbol);
      if (price === 0) return "-";
      
      // 小数点以下が多い場合（meme coins など）は適切に調整
      if (price < 0.01) {
        return `$${price.toFixed(6)}`;
      } else if (price < 1) {
        return `$${price.toFixed(4)}`;
      } else {
        return `$${price.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
      }
    },
    [getPrice]
  );

  return {
    prices,
    isLoading,
    error,
    lastUpdated,
    refetch: fetchPrices,
    getPrice,
    formatPrice,
  };
}

/**
 * Vault価格を計算するフック
 * 構成トークンの価格からVaultの総価値を計算
 */
export function useVaultPrice(
  composition: Array<{ token: { symbol: string }; weight: number }> | undefined,
  totalTvl: number
) {
  const symbols = composition?.map(c => c.token.symbol) || [];
  const { prices, isLoading, error, formatPrice } = useTokenPrices(symbols);

  const calculateVaultPrice = useCallback(() => {
    if (!composition || composition.length === 0) {
      return { unitPrice: 0, totalValue: 0, tokenValues: [] };
    }

    const tokenValues = composition.map(c => {
      const price = prices[c.token.symbol.toUpperCase()] || 0;
      const allocationValue = (totalTvl * c.weight) / 100;
      const tokenAmount = price > 0 ? allocationValue / price : 0;
      
      return {
        symbol: c.token.symbol,
        weight: c.weight,
        price,
        value: allocationValue,
        amount: tokenAmount,
      };
    });

    // ユニット価格を計算（仮想的な1ユニットあたりの価格）
    const totalValue = tokenValues.reduce((sum, t) => sum + t.value, 0);
    const unitPrice = totalValue > 0 ? totalValue / 100 : 0; // 100ユニットとして計算

    return {
      unitPrice,
      totalValue,
      tokenValues,
    };
  }, [composition, prices, totalTvl]);

  const vaultData = calculateVaultPrice();

  return {
    ...vaultData,
    prices,
    isLoading,
    error,
    formatPrice,
  };
}
