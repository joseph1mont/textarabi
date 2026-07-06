import json
from http.server import BaseHTTPRequestHandler
from mishkal.tashkeel import TashkeelClass

# في Next.js على Vercel، يجب أن تكون الدالة باسم الطريقة المستهدفة (POST)
def POST(request):
    try:
        # قراءة البيانات القادمة من الطلب
        body = request.json()
        text = body.get('text', '')
        
        # تشغيل مكتبة مشكال المعالجة النصوص
        tashkeel_backend = TashkeelClass()
        result_text = tashkeel_backend.tashkeel(text)
        
        # إرجاع رد بتنسيق JSON متوافق مع Next.js
        return json({
            "result": result_text
        }, headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        })
    except Exception as e:
        return json({"error": str(e)}, status=500)