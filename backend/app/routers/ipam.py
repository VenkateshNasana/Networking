from fastapi import APIRouter
router = APIRouter(prefix="/api/ipam", tags=["ipam"])

@router.get("/subnets")
def get_subnets():
    return [{"network": "10.0.0.0/24", "utilization": 45}]
