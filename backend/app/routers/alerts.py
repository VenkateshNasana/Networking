from fastapi import APIRouter
router = APIRouter(prefix="/api/alerts", tags=["alerts"])

@router.get("/")
def get_alerts():
    return [{"id": 1, "severity": "Critical", "message": "High CPU utilization on Router-01"}]
