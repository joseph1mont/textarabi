import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. محاولة قراءة النص
    const body = await req.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    // 2. منطق المعالجة (تجريبي)
    const result = text + " (مشكول)";

    // 3. إرجاع النتيجة
    return NextResponse.json(
      { result },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("API Error:", error); // هذا سيظهر في Vercel Logs
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
