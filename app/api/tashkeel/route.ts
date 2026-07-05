import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    // هنا يتم معالجة التشكيل (يمكنك دمج مكتبة تشكيل هنا)
    const result = text + " (تم التشكيل)"; // استبدلها بمنطق التشكيل الفعلي

    return NextResponse.json(
      { result },
      {
        headers: {
          "Access-Control-Allow-Origin": "https://textarabi.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    );
  } catch (error) {
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://textarabi.com",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
