"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ImagePlus, Loader2, MessageSquareWarning, X } from "lucide-react";
import { toast } from "sonner";
import { submitBugReport } from "@/app/actions/submit-bug";
import { useBugReport } from "@/components/providers/BugReportProvider";

// ==========================================
// 型定義
// ==========================================

// ==========================================
// メインコンポーネント
// ==========================================

/**
 * BugReportWidget
 * 
 * バグレポートを送信するためのモーダルウィジェット
 * 
 * 機能:
 * - Discord IDとバグの説明を入力
 * - スクリーンショットの添付（オプション）
 * - バリデーションとエラーハンドリング
 * - 送信成功時に自動でクローズ
 * 
 * @returns BugReportWidgetコンポーネント
 */
export function BugReportWidget() {
  // ==========================================
  // ステートとRef
  // ==========================================
  
  const { isOpen, close } = useBugReport();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // フォーム入力値
  const [discord, setDiscord] = useState("");
  const [description, setDescription] = useState("");

  // ==========================================
  // イベントハンドラー
  // ==========================================

  /**
   * ファイル選択ハンドラー
   * スクリーンショット画像の選択を処理
   */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
    }
  };

  /**
   * フォームリセット
   * すべての入力値を初期化
   */
  const resetForm = () => {
    setDiscord("");
    setDescription("");
    setScreenshot(null);
  };

  /**
   * フォーム送信ハンドラー
   * バリデーションとバグレポートの送信を行う
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // バリデーション
    if (!discord || !description) {
      toast.error("Please fill in required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // フォームデータの作成
      const formData = new FormData();
      formData.append("discord", discord);
      formData.append("description", description);
      
      if (screenshot) {
        formData.append("screenshot", screenshot);
      }

      // バグレポートの送信
      const result = await submitBugReport(formData);

      if (result.success) {
        toast.success("Bug report sent! Thank you.");
        resetForm();
        close();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to send bug report.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // レンダリング
  // ==========================================

  // モーダルが開いていない場合は何も表示しない
  if (!isOpen) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex items-end justify-center sm:items-center">
      {/* オーバーレイ */}
      <div
        className="pointer-events-auto absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* モーダルカード */}
      <Card className="animate-in slide-in-from-bottom-5 fade-in pointer-events-auto relative mx-4 mb-6 w-full max-w-[350px] border-white/10 bg-[#1E1E24] shadow-2xl duration-300 sm:mb-0">
        {/* 閉じるボタン */}
        <div className="absolute top-4 right-4">
          <button 
            onClick={close} 
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* フォームコンテンツ */}
        <div className="space-y-4 p-5">
          {/* ヘッダー */}
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <MessageSquareWarning className="text-white" /> 
            Report a Bug
          </h3>

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Discord ID入力 */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-300">
                Discord (required)
              </label>
              <Input
                placeholder="Username"
                className="border-white/5 bg-[#2B2B36] text-white placeholder:text-neutral-500"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                required
              />
            </div>

            {/* バグの説明入力 */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-300">
                Description (required)
              </label>
              <Textarea
                placeholder="What's the bug? What did you expect?"
                className="min-h-[100px] resize-none border-white/5 bg-[#2B2B36] text-white placeholder:text-neutral-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* スクリーンショットアップロード */}
            <div>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <Button
                type="button"
                variant="outline"
                className="w-full border-sky-500/30 bg-[#2B4B64]/50 text-sky-400 transition-colors hover:bg-[#2B4B64] hover:text-sky-300"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImagePlus size={16} className="mr-2" />
                {screenshot ? screenshot.name : "Add a screenshot"}
              </Button>
            </div>

            {/* 送信ボタン */}
            <div className="space-y-2 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2563EB] font-bold text-white hover:bg-[#1d4ed8] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={16} />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
