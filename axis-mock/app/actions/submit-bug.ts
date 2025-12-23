// app/actions/submit-bug.ts
"use server";

import nodemailer from "nodemailer";

export async function submitBugReport(formData: FormData) {
  const discord = formData.get("discord") as string;
  const description = formData.get("description") as string;
  const screenshot = formData.get("screenshot") as File;

  // 1. バリデーション
  if (!discord || !description) {
    return { success: false, message: "Discord ID and Description are required." };
  }

  try {
    // 2. Transporterの設定 (Gmail用)
    // 注意: 本番で使うには .env に GMAIL_USER と GMAIL_APP_PASSWORD を設定してください
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // あなたのGmailアドレス
        pass: process.env.GMAIL_APP_PASSWORD, // Googleアカウントのアプリパスワード
      },
    });

    // 3. 添付ファイルの処理
    let attachments = [];
    if (screenshot && screenshot.size > 0) {
      const buffer = Buffer.from(await screenshot.arrayBuffer());
      attachments.push({
        filename: screenshot.name,
        content: buffer,
      });
    }

    // 4. メール送信
    await transporter.sendMail({
      from: `"Axis Bug Reporter" <${process.env.GMAIL_USER}>`,
      to: "yusukekikuta.05@gmail.com", // ★送信先
      subject: `[Bug Report] from ${discord}`,
      text: `
User (Discord): ${discord}

Description:
${description}
      `,
      attachments: attachments,
    });

    return { success: true, message: "Report sent successfully!" };

  } catch (error: any) {
    console.error("Email Error:", error);
    // 環境変数が設定されていない場合のフォールバック（デモ用）
    // 実際にはエラーになりますが、UIの動作確認のために成功を返すか、エラーを返すか選択できます
    return { success: false, message: "Failed to send email. Check server logs." };
  }
}