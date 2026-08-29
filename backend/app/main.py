from fastapi import FastAPI
from .routers import auth, devices

app = FastAPI(title="NetOps API")
app.include_router(auth.router)
app.include_router(devices.router)
