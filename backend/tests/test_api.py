from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200

def test_get_devices():
    response = client.get("/api/devices/")
    assert response.status_code == 200
