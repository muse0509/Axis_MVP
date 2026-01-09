"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAxisStore } from "@/app/store/useAxisStore";
import { AppLayout } from "@/components/layout/AppLayout";
// 既存のコンポーネントを読み込みます
import { ExplorePage } from "@/components/pages/ExplorePage";

export default function PagesMain() {
  const { isRegistered } = useAxisStore();
  const router = useRouter();
  // Track hydration state without useEffect setState
  const [isMounted] = useState(() => typeof window !== 'undefined');

  // 未ログインならLP（ルート）へ戻す
  useEffect(() => {
    if (isMounted && !isRegistered) {
      router.push("/");
    }
  }, [isMounted, isRegistered, router]);

  if (!isMounted || !isRegistered) return <div className="min-h-screen bg-black" />;

  return (
    <AppLayout>
      <ExplorePage />
    </AppLayout>
  );
}