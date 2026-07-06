# pyright: reportMissingImports=false

import json

def OPTIONS(request):
    return json({}, headers={
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    })

def POST(request):
    try:
        from mishkal.tashkeel import TashkeelClass
        body = request.json()
        text = body.get('text', '')
        
        tashkeel_backend = TashkeelClass()
        result_text = tashkeel_backend.tashkeel(text)
        
        return json({
            "result": result_text
        }, headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        })
    except Exception as e:
        return json({"error": str(e)}, status=500, headers={"Access-Control-Allow-Origin": "*"})