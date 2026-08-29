from fastapi import FastAPI
from .routers import auth

app = FastAPI(title="NetOps API")
app.include_router(auth.router)

@app.get("/")
def read_root():
    return {"status": "ok"}
