/**
 * Jupiter API Integration
 * 
 * Jupiter APIを使用してSolanaトークンの価格を取得する
 * https://station.jup.ag/docs/apis/price-api
 */

// Jupiter Price API V2 エンドポイント
const JUPITER_PRICE_API = "https://api.jup.ag/price/v2";

/**
 * トークン価格レスポンスの型
 */
export interface JupiterPriceData {
  id: string;
  type: string;
  price: string;
  extraInfo?: {
    lastSwappedPrice?: {
      lastJupiterSellAt: number;
      lastJupiterBuyAt: number;
      sellPrice: string;
      buyPrice: string;
    };
  };
}

export interface JupiterPriceResponse {
  data: Record<string, JupiterPriceData>;
  timeTaken: number;
}

/**
 * トークンリストから価格マッピング用のアドレスリストを取得
 */
export const TOKEN_ADDRESS_MAP: Record<string, string> = {
  // Majors
  "SOL": "So11111111111111111111111111111111111111112",
  "USDC": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  "USDT": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
  "WBTC": "3NZ9JMVBmGAqocyBIC2c7LQCJScmgsAZ6vQqTDzcqmJh",
  "WETH": "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
  
  // DeFi Blue Chips
  "JUP": "JUPyiwrYJFskUPiHa7hkeR8VUtqVomfEtMEKyLb6XR3",
  "RAY": "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
  "ORCA": "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
  "PYTH": "HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3",
  "RENDER": "rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof",
  "HNT": "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
  
  // LSTs (Liquid Staking)
  "mSOL": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
  "jitoSOL": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
  "bSOL": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
  
  // Memes
  "BONK": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
  "WIF": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
  "POPCAT": "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
};

// アドレスからシンボルへの逆マッピング
export const ADDRESS_TO_SYMBOL: Record<string, string> = Object.entries(TOKEN_ADDRESS_MAP).reduce(
  (acc, [symbol, address]) => {
    acc[address] = symbol;
    return acc;
  },
  {} as Record<string, string>
);

/**
 * 複数トークンの価格を一括取得
 * 
 * @param mintAddresses - トークンのミントアドレス配列
 * @returns アドレスをキーとした価格のマップ
 */
export async function getTokenPrices(
  mintAddresses: string[]
): Promise<Record<string, number>> {
  if (mintAddresses.length === 0) {
    return {};
  }

  try {
    const ids = mintAddresses.join(",");
    const response = await fetch(`${JUPITER_PRICE_API}?ids=${ids}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      next: { revalidate: 60 }, // 60秒間キャッシュ
    });

    if (!response.ok) {
      console.error("Jupiter API error:", response.status, response.statusText);
      return {};
    }

    const data: JupiterPriceResponse = await response.json();
    
    const prices: Record<string, number> = {};
    for (const [address, priceData] of Object.entries(data.data || {})) {
      if (priceData && priceData.price) {
        prices[address] = parseFloat(priceData.price);
      }
    }

    return prices;
  } catch (error) {
    console.error("Failed to fetch token prices from Jupiter:", error);
    return {};
  }
}

/**
 * シンボルで価格を取得
 * 
 * @param symbols - トークンシンボル配列
 * @returns シンボルをキーとした価格のマップ
 */
export async function getTokenPricesBySymbol(
  symbols: string[]
): Promise<Record<string, number>> {
  // シンボルからアドレスに変換
  const addresses = symbols
    .map(symbol => TOKEN_ADDRESS_MAP[symbol.toUpperCase()])
    .filter(Boolean);

  if (addresses.length === 0) {
    return {};
  }

  const pricesByAddress = await getTokenPrices(addresses);

  // アドレスからシンボルに変換して返す
  const pricesBySymbol: Record<string, number> = {};
  for (const [address, price] of Object.entries(pricesByAddress)) {
    const symbol = ADDRESS_TO_SYMBOL[address];
    if (symbol) {
      pricesBySymbol[symbol] = price;
    }
  }

  return pricesBySymbol;
}

/**
 * 全サポートトークンの価格を取得
 */
export async function getAllTokenPrices(): Promise<Record<string, number>> {
  const allAddresses = Object.values(TOKEN_ADDRESS_MAP);
  return getTokenPrices(allAddresses);
}

/**
 * 価格をキャッシュするためのシンプルなストア
 */
let priceCache: Record<string, number> = {};
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; // 60秒

/**
 * キャッシュ付きで全トークン価格を取得
 */
export async function getCachedTokenPrices(): Promise<Record<string, number>> {
  const now = Date.now();
  
  if (now - lastFetchTime < CACHE_DURATION && Object.keys(priceCache).length > 0) {
    return priceCache;
  }

  const prices = await getAllTokenPrices();
  
  // シンボルベースのキャッシュに変換
  const symbolPrices: Record<string, number> = {};
  for (const [address, price] of Object.entries(prices)) {
    const symbol = ADDRESS_TO_SYMBOL[address];
    if (symbol) {
      symbolPrices[symbol] = price;
    }
  }

  priceCache = symbolPrices;
  lastFetchTime = now;
  
  return symbolPrices;
}

/**
 * Vaultの構成から総価値を計算
 * 
 * @param composition - Vault構成（トークンとウェイト）
 * @param totalTvl - 総TVL
 * @returns 各トークンの価値と総価値
 */
export async function calculateVaultValue(
  composition: Array<{ token: { symbol: string; address?: string }; weight: number }>,
  totalTvl: number
): Promise<{
  tokenValues: Array<{
    symbol: string;
    weight: number;
    price: number;
    value: number;
  }>;
  totalValue: number;
}> {
  const symbols = composition.map(c => c.token.symbol);
  const prices = await getTokenPricesBySymbol(symbols);

  const tokenValues = composition.map(c => {
    const price = prices[c.token.symbol.toUpperCase()] || 0;
    const value = (totalTvl * c.weight) / 100;
    return {
      symbol: c.token.symbol,
      weight: c.weight,
      price,
      value,
    };
  });

  return {
    tokenValues,
    totalValue: totalTvl,
  };
}
