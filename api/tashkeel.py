# api/tashkeel.py
from http.server import BaseHTTPRequestHandler
import json
from mishkal.tashkeel import tashkeel

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            # قراءة طول المحتوى
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            # تحليل بيانات النص
            data = json.loads(post_data.decode('utf-8'))
            text = data.get('text', '')

            if not text:
                self.send_error(400, "No text provided")
                return

            # تطبيق خوارزمية مشكال للتشكيل
            vocalized_text = tashkeel.tashkeel(text)

            # إرسال الرد
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            response = {'result': vocalized_text}
            self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_msg = {'error': str(e)}
            self.wfile.write(json.dumps(error_msg).encode('utf-8'))