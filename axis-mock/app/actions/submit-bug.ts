"use server";

// import nodemailer from "nodemailer"; // Nodemailer is not supported in Edge Runtime

export async function submitBugReport(formData: FormData) {
  const discord = formData.get("discord") as string;
  const description = formData.get("description") as string;
  // const screenshot = formData.get("screenshot") as File;

  if (!discord || !description) {
    return { success: false, message: "Discord ID and Description are required." };
  }

  // MOCK: Emulate success for Edge Runtime compatibility
  console.log("---------------------------------------------------");
  console.log(" [MOCK] Bug Report Submitted (Edge Runtime)");
  console.log(" User:", discord);
  console.log(" Description:", description);
  console.log("---------------------------------------------------");

  return { success: true, message: "Report sent successfully! (MOCK)" };

  /* 
  // Original Nodemailer logic (Incompatible with Edge Runtime)
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    // ... logic ...
  } catch (error: any) {
    console.error("Email Error:", error);
    return { success: false, message: "Failed to send email. Check server logs." };
  }
  */
}
