import type { Metadata } from "next";
// Google Fontsから高級感のあるフォントを導入（任意）
// ここでは標準のTimes New Roman系を使うため特に追加なしですが、
// layoutのclassNameで明示的に指定します。
import "./globals.css";
import AppWalletProvider from "@/components/providers/AppWalletProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { BugReportWidget } from "@/components/layout/BugReportWidget";

export const metadata: Metadata = {
  title: "Axis Protocol",
  description: "The Next Gen ETF Protocol on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-serif antialiased min-h-screen">
        <AppWalletProvider>
          <Navbar />
          {/* ★修正: ヘッダーの高さ分(pt-24)の余白を設けて被りを防ぐ */}
          <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
            {children}
            <BugReportWidget />
          </main>
          <Toaster />
        </AppWalletProvider>
      </body>
    </html>
  );
}