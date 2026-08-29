from fastapi import FastAPI
from .routers import auth, devices, ipam, alerts

app = FastAPI(title="NetOps API")
app.include_router(auth.router)
app.include_router(devices.router)
app.include_router(ipam.router)
app.include_router(alerts.router)
