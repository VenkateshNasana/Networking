from fastapi import APIRouter
router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login")
def login():
    return {"access_token": "dummy_token", "token_type": "bearer"}
