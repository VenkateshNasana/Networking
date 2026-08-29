from fastapi import FastAPI
app = FastAPI(title="NetOps API")

@app.get("/")
def read_root():
    return {"status": "ok", "message": "NetOps API is running"}
