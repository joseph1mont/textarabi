# api/tashkeel.py أو التسمية المعتمدة لديك في العناوين
import json
from http.server import BaseHTTPRequestHandler
from mishkal.tashkeel import TashkeelClass

class handler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Accept")
        self.end_headers()

    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode('utf-8'))
            
            text = data.get('text', '')
            
            # استدعاء مكتبة مشكال
            tashkeel_backend = TashkeelClass()
            result_text = tashkeel_backend.tashkeel(text)
            
            # إرسال الاستجابة الناجحة
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type, Accept")
            self.end_headers()
            
            response_data = {"result": result_text}
            self.wfile.write(json.dumps(response_data).encode('utf-8'))
            
        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            
            response_data = {"error": str(e)}
            self.wfile.write(json.dumps(response_data).encode('utf-8'))