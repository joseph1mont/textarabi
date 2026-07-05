import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const result = applyBasicTashkeel(text);

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
    // تم تغيير 'error' إلى _ (شرطة سفلية) أو حذفها لأنها غير مستخدمة
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}

function applyBasicTashkeel(text: string): string {
  const tashkeelMap: { [key: string]: string } = {
    منصة: "مِنَصَّة",
    ويب: "وَيْب",
    المصممين: "الْمُصَمِّمِينَ",
    تطوير: "تَطْوِير",
    نص: "نَصّ",
  };

  // تم تحويل let إلى const لأن القيمة لا تتغير
  const words = text.split(" ");

  const processed = words.map((word) => {
    // تم تحويل let إلى const لأن القيمة لا تتغير
    const cleanWord = word.replace(/[\u064B-\u0652]/g, "");
    return tashkeelMap[cleanWord] || word;
  });

  return processed.join(" ");
}
