"use client";

import React, { useState, useEffect } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider } from "@privy-io/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig } from "@privy-io/wagmi";
import { http } from "wagmi";
import { mainnet } from "wagmi/chains";

// ==========================================
// Configuration
// ==========================================

const PRIVY_APP_ID = "cmk3fq74f03ugif0c83tghcr7";

// ==========================================
// Wagmi Configuration (Minimal - required for Privy)
// ==========================================

export const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

// ==========================================
// Query Client
// ==========================================

const queryClient = new QueryClient();

// ==========================================
// Main Provider Component
// ==========================================

/**
 * AppWalletProvider
 * 
 * Privy authentication provider with Solana support
 * 
 * Features:
 * - Multi-chain wallet support (Ethereum, Solana)
 * - Email authentication
 * - Social login (Google, Twitter, Discord, etc.)
 * - Embedded wallets
 * - WalletConnect initialization guard to prevent duplicate initialization
 * 
 * @param children - React children components
 */
export default function AppWalletProvider({ children }: { children: React.ReactNode }) {
  // Track hydration state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This is a standard SSR hydration pattern - setting mounted state in useEffect is intentional
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // SSR中はプロバイダーなしでchildrenを返す
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        // Display settings
        appearance: {
          theme: "dark",
          accentColor: "#10b981",
          logo: "/icon.png",
          showWalletLoginFirst: true,
          walletList: ['phantom', 'solflare', 'detected_solana_wallets'],
        },
        // Login methods - Wallet (Phantom, Solflare), Twitter/X, Google
        loginMethods: ["wallet", "twitter", "google"],
        // Embedded wallet configuration - create for social login users
        embeddedWallets: {
          solana: {
            createOnLogin: 'users-without-wallets',
          },
        },
        // Wallet configuration - only set if project ID exists
        ...(process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID && {
          walletConnectCloudProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
        }),
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
