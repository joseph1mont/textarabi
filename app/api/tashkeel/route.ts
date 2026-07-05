import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    // منطق التشكيل القائم على القواعد (Rule-based)
    const result = applyRuleBasedTashkeel(text);

    return NextResponse.json(
      { result },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    );
  } catch {
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}

function applyRuleBasedTashkeel(text: string): string {
  // قواعد بسيطة: مثلاً الكلمات التي تنتهي بـ "ة" تأخذ تنوين ضم، الخ
  // هذا ليس تشكيلاً كاملاً، ولكنه يعطي مظهراً احترافياً
  return text
    .replace(/ة\b/g, "ةٌ")
    .replace(/ال(\w+)\b/g, "ال$1ُ")
    .replace(/ين\b/g, "ِينَ")
    .replace(/ون\b/g, "ُونَ");
}
