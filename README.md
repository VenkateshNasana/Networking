# NETOPS — NETWORK MANAGEMENT & MONITORING PLATFORM

## Installation
1. Install Python 3.10+ and Node.js 18+.
2. Backend: `cd backend && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt`
3. Frontend: `cd frontend && npm install`

## Build
1. Frontend: `cd frontend && npm run build`
2. Docker: `docker-compose build`

## Run
1. Start DB: `docker-compose up -d`
2. Backend: `cd backend && uvicorn app.main:app --reload`
3. Frontend: `cd frontend && npm run dev`

## Dependencies
- Backend: FastAPI, SQLAlchemy, Postgres, Celery
- Frontend: React, Vite, TailwindCSS

## Usage
Navigate to http://localhost:5173 to view the Network Operations Dashboard.
