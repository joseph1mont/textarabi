import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    // هنا نقوم باستدعاء خدمة تشكيل خارجية (API)
    // كمثال: سنقوم بإرسال النص لخدمة تشكيل نصي (يمكنك استبدال الرابط بـ API خاص بك)
    const response = await fetch("https://mishkal.herokuapp.com/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    });

    const data = await response.json();

    return NextResponse.json(
      { result: data.result || text }, // نرجع النص المشكول أو النص الأصلي إذا فشل
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Tashkeel Error:", error);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
