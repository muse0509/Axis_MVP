"use server";

import nodemailer from "nodemailer";

// ==========================================
// 定数定義
// ==========================================

/** OTPコードの桁数 (6 digits: 100000-999999) - defined by OTP_MIN/OTP_MAX range */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _OTP_CODE_LENGTH = 6;

/** OTPコードの最小値 */
const OTP_MIN = 100000;

/** OTPコードの最大値 */
const OTP_MAX = 999999;

/** OTPの有効期限（分） */
const OTP_EXPIRY_MINUTES = 10;

/** API Base URL */
const API_URL = "https://axis-api.yusukekikuta-05.workers.dev";

// ==========================================
// 型定義
// ==========================================

/**
 * OTP送信結果
 */
interface OtpResult {
  /** 成功フラグ */
  success: boolean;
  /** エラーメッセージ（失敗時） */
  message?: string;
}

// ==========================================
// ヘルパー関数
// ==========================================

/**
 * ランダムな6桁のOTPコードを生成
 * @returns 6桁の数字文字列
 */
const generateOtpCode = (): string => {
  return Math.floor(OTP_MIN + Math.random() * (OTP_MAX - OTP_MIN + 1)).toString();
};

/**
 * メールアドレスのバリデーション
 * @param email - 検証するメールアドレス
 * @returns 有効な場合true
 */
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * OTPをデータベースに保存
 * @param email - メールアドレス
 * @param code - OTPコード
 * @throws エラーが発生した場合
 */
const storeOtpInDatabase = async (email: string, code: string): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/store-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code }),
  });

  if (!response.ok) {
    throw new Error("Failed to store OTP in database");
  }
};

/**
 * メール送信用のトランスポーターを作成
 * @returns Nodemailerトランスポーター
 */
const createEmailTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error("Email credentials are not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

/**
 * OTPコードを含むHTMLメールテンプレートを生成
 * @param code - OTPコード
 * @returns HTMLメール本文
 */
const generateEmailHtml = (code: string): string => {
  return `
    <div style="background: #000; padding: 40px; color: #fff; font-family: sans-serif;">
      <div style="max-width: 500px; margin: 0 auto; border: 1px solid #333; padding: 30px; border-radius: 12px;">
        <h2 style="margin: 0 0 20px; font-size: 24px;">Axis Protocol</h2>
        <p style="color: #aaa;">Enter the code below to sign in:</p>
        <div style="background: #111; padding: 20px; font-size: 32px; font-weight: bold; text-align: center; letter-spacing: 8px; border-radius: 8px; margin: 30px 0; color: #10b981;">
          ${code}
        </div>
        <p style="color: #666; font-size: 12px;">This code will expire in ${OTP_EXPIRY_MINUTES} minutes.</p>
      </div>
    </div>
  `;
};

// ==========================================
// メイン関数
// ==========================================

/**
 * OTPコードをメールで送信
 * 
 * 処理フロー:
 * 1. メールアドレスのバリデーション
 * 2. ランダムなOTPコードの生成
 * 3. OTPをデータベースに保存
 * 4. OTPを含むメールの送信
 * 
 * @param email - 送信先メールアドレス
 * @returns OTP送信結果
 */
export async function sendOtpEmail(email: string): Promise<OtpResult> {
  // バリデーション
  if (!email || !isValidEmail(email)) {
    return { success: false, message: "Invalid email address." };
  }

  try {
    // OTPコードの生成
    const code = generateOtpCode();

    // データベースに保存
    await storeOtpInDatabase(email, code);

    // メールトランスポーターの作成
    const transporter = createEmailTransporter();

    // メール送信
    await transporter.sendMail({
      from: `"Axis Security" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your Axis Login Code",
      text: `Your verification code is: ${code}`,
      html: generateEmailHtml(code),
    });

    return { success: true };
  } catch (error) {
    console.error("OTP Email Error:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Failed to send code." 
    };
  }
}
