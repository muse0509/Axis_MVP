"use server";

// ==========================================
// 定数定義
// ==========================================

/** デフォルトAPI URL */
const DEFAULT_API_URL = "https://axis-api.yusukekikuta-05.workers.dev";

// ==========================================
// 型定義
// ==========================================

/**
 * バグレポート送信結果
 */
interface BugReportResult {
  /** 成功フラグ */
  success: boolean;
  /** メッセージ（成功/失敗） */
  message: string;
}

/**
 * API レスポンス型
 */
interface ApiResponse {
  /** 成功フラグ */
  success: boolean;
  /** メッセージ */
  message?: string;
  /** エラーメッセージ */
  error?: string;
}

// ==========================================
// ヘルパー関数
// ==========================================

/**
 * フォームデータのバリデーション
 * @param discord - Discord ID
 * @param description - バグの説明
 * @returns バリデーション結果（エラーメッセージまたはnull）
 */
const validateFormData = (discord: string, description: string): string | null => {
  if (!discord || discord.trim().length === 0) {
    return "Discord ID is required.";
  }
  
  if (!description || description.trim().length === 0) {
    return "Description is required.";
  }
  
  if (description.length < 10) {
    return "Description must be at least 10 characters.";
  }
  
  return null;
};

/**
 * API URLを取得
 * 環境変数から取得、存在しない場合はデフォルト値を使用
 * @returns API URL
 */
const getApiUrl = (): string => {
  return process.env.NEXT_PUBLIC_AXIS_API_URL || DEFAULT_API_URL;
};

/**
 * バグレポートをAPIに送信
 * @param discord - Discord ID
 * @param description - バグの説明
 * @returns API レスポンス
 */
const submitToApi = async (discord: string, description: string): Promise<ApiResponse> => {
  const apiUrl = getApiUrl();
  
  const response = await fetch(`${apiUrl}/submit-bug`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ discord, description }),
  });

  const result = await response.json() as ApiResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.message || result.error || "Unknown server error");
  }

  return result;
};

// ==========================================
// メイン関数
// ==========================================

/**
 * バグレポートを送信
 * 
 * 処理フロー:
 * 1. フォームデータの取得
 * 2. バリデーション
 * 3. Cloudflare Worker（axis-api）経由でメール送信
 * 
 * @param formData - フォームデータ（discord, description）
 * @returns バグレポート送信結果
 */
export async function submitBugReport(formData: FormData): Promise<BugReportResult> {
  // フォームデータの取得
  const discord = formData.get("discord") as string;
  const description = formData.get("description") as string;

  // バリデーション
  const validationError = validateFormData(discord, description);
  if (validationError) {
    return { success: false, message: validationError };
  }

  try {
    // APIに送信
    await submitToApi(discord, description);

    return { 
      success: true, 
      message: "Report sent successfully!" 
    };

  } catch (error: unknown) {
    console.error("Bug Report Error:", error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Failed to send report.";
    
    return { 
      success: false, 
      message: errorMessage 
    };
  }
}
