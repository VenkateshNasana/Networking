from fastapi import APIRouter
router = APIRouter(prefix="/api/devices", tags=["devices"])

@router.get("/")
def get_devices():
    return [{"id": 1, "hostname": "Router-01", "ip": "192.168.1.1", "status": "Online"}]

@router.post("/")
def create_device(device: dict):
    return {"status": "created", "data": device}
