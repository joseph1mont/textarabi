# /app/api/tashkeel/route.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from mishkal.tashkeel import TashkeelClass

app = FastAPI()

# Enable robust CORS settings for your static live site deployment
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextPayload(BaseModel):
    text: str

@app.post("/api/tashkeel")
def tashkeel_endpoint(payload: TextPayload):
    try:
        if not payload.text.strip():
            return {"result": ""}
            
        tashkeel_backend = TashkeelClass()
        result_text = tashkeel_backend.tashkeel(payload.text)
        return {"result": result_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))