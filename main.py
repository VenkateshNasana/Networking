import os
import subprocess

def run_app():
    print("Starting Network Operations Platform...")
    subprocess.run(["docker-compose", "up", "-d"])

if __name__ == "__main__":
    run_app()
