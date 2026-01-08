/**
 * Solana Wallet Utilities
 * 
 * Privyを通じて接続されたウォレットからSolanaアドレスのみを取得するユーティリティ
 */

import { User } from "@privy-io/react-auth";

/**
 * ユーザーからSolanaウォレットアドレスを取得
 * Phantomなどで接続した場合、EVMアドレス(0x...)ではなくSolanaアドレスを取得
 * 
 * @param user - Privyのユーザーオブジェクト
 * @returns Solanaアドレス（存在しない場合はundefined）
 */
export function getSolanaAddress(user: User | null): string | undefined {
  if (!user) return undefined;

  const linkedAccounts = user.linkedAccounts || [];
  
  // Solanaウォレットを優先的に探す
  // 1. solanaタイプのウォレットを探す
  // 2. phantom, solflareなどのSolana専用ウォレットを探す
  // 3. アドレスがSolanaフォーマット（Base58、32-44文字）のものを探す
  
  for (const account of linkedAccounts) {
    if (account.type !== 'wallet') continue;
    
    const walletAccount = account as any;
    const address = walletAccount.address;
    const walletClientType = walletAccount.walletClientType;
    const chainType = walletAccount.chainType;
    
    // chainTypeがsolanaの場合
    if (chainType === 'solana') {
      return address;
    }
    
    // Solana専用ウォレットクライアントの場合
    if (walletClientType === 'phantom' || 
        walletClientType === 'solflare' ||
        walletClientType === 'backpack' ||
        walletClientType === 'glow') {
      // Solanaアドレスかどうかを確認（0xで始まらない、かつ適切な長さ）
      if (address && !address.startsWith('0x') && address.length >= 32 && address.length <= 44) {
        return address;
      }
    }
    
    // アドレスがSolanaフォーマットの場合（Base58エンコード、0xで始まらない）
    if (address && !address.startsWith('0x') && isSolanaAddress(address)) {
      return address;
    }
  }
  
  // フォールバック: user.wallet.addressがSolanaアドレスの場合
  const defaultAddress = user.wallet?.address;
  if (defaultAddress && !defaultAddress.startsWith('0x') && isSolanaAddress(defaultAddress)) {
    return defaultAddress;
  }
  
  return undefined;
}

/**
 * アドレスがSolanaアドレスかどうかを判定
 * Solanaアドレスは32-44文字のBase58エンコードされた文字列
 * 
 * @param address - 確認するアドレス
 * @returns Solanaアドレスの場合true
 */
export function isSolanaAddress(address: string): boolean {
  if (!address) return false;
  
  // EVMアドレスを除外
  if (address.startsWith('0x')) return false;
  
  // 長さチェック（Solanaアドレスは32-44文字）
  if (address.length < 32 || address.length > 44) return false;
  
  // Base58文字のみで構成されているかチェック
  // Base58: 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]+$/;
  return base58Regex.test(address);
}

/**
 * アドレスを短縮形式で表示
 * 
 * @param address - フルアドレス
 * @param prefixLength - 前部分の文字数（デフォルト: 4）
 * @param suffixLength - 後部分の文字数（デフォルト: 4）
 * @returns 短縮アドレス（例: "ABCD...WXYZ"）
 */
export function shortenAddress(
  address: string | undefined, 
  prefixLength = 4, 
  suffixLength = 4
): string {
  if (!address) return "";
  if (address.length <= prefixLength + suffixLength) return address;
  return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`;
}
