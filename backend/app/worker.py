from celery import Celery

celery_app = Celery("tasks", broker="redis://localhost:6379/0")

@celery_app.task
def simulate_device_check():
    print("Simulating network checks...")
    return True
