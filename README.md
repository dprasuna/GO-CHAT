# Chat Application with Docker

This repository contains a chat application built using **React** for the frontend and **Go** with **WebRTC** for the backend. Docker is used to containerize both the frontend and backend, making it easy to deploy and run the application on any machine with Docker installed.

## Prerequisites

Before you can run this application, ensure you have the following installed:

- **[Docker](https://docs.docker.com/get-docker/)**: For containerizing the frontend and backend.
- **[Docker Compose](https://docs.docker.com/compose/install/)** (Optional but recommended): To manage multi-container applications.

## Folder Structure

The project is structured as follows:

```plaintext
chatapplication/
├── backend/                  # Go WebRTC backend
│   ├── Dockerfile             # Dockerfile for Go WebRTC server
│   ├── go.mod                 # Go module definition
│   ├── go.sum                 # Go module dependencies
│   └── main.go                # Main Go application file
├── frontend/                 # React frontend
│   ├── Dockerfile             # Dockerfile for React frontend
│   ├── package.json           # React dependencies
│   └── src/                   # React app source code
└── docker-compose.yml         # Optional: Docker Compose file to manage both services

Steps to Set Up and Run
1. Clone the Repository
Start by cloning the repository to your local machine:

bash
Copy code
git clone <repository-url>
cd chatapplication
2. Build and Run Backend (Go + WebRTC)
a. Navigate to the backend folder
bash
Copy code
cd backend
b. Build the Docker image for the Go backend
Run the following command to build the Docker image for the backend:

bash
Copy code
docker build -t websocket-backend .
This will create a Docker image named websocket-backend. The Go application inside the container will listen on port 8080.

c. Run the backend container
Start the backend service with the following command:

bash
Copy code
docker run -d -p 8080:8080 --name websocket-backend websocket-backend
This will run the backend in a detached state and expose port 8080 on your host machine.

3. Build and Run Frontend (React)
a. Navigate to the frontend folder
bash
Copy code
cd ../frontend
b. Build the Docker image for the React frontend
To build the Docker image for the frontend, run:

bash
Copy code
docker build -t frontend-app .
This will create a Docker image named frontend-app for the React frontend.

c. Run the frontend container
Once the image is built, you can start the frontend service:

bash
Copy code
docker run -d -p 3000:3000 --name frontend-app frontend-app
This will run the frontend service in a detached mode and expose port 3000 to your host machine.

4. (Optional) Use Docker Compose
If you prefer to manage both the frontend and backend services together, you can use Docker Compose.

a. Create the docker-compose.yml file
Here’s a sample docker-compose.yml to define both services:

yaml
Copy code
version: '3'

services:
  backend:
    build:
      context: ./backend
    ports:
      - "8080:8080"
    networks:
      - chatapp-network

  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
    networks:
      - chatapp-network
    depends_on:
      - backend

networks:
  chatapp-network:
    driver: bridge
b. Run both services with Docker Compose
Run both services (frontend and backend) together with a single command:

bash
Copy code
docker-compose up --build
This will build both the frontend and backend images (if not already built) and start both containers.

5. Access the Application
Once the containers are up and running:

Frontend: Open http://localhost:3000 in your browser.
Backend: The WebSocket server for the backend will be running on port 8080. It’s typically not accessed directly from the browser.
6. Stopping the Containers
To stop the containers:

If using individual Docker commands:

bash
Copy code
docker stop frontend-app websocket-backend
If using Docker Compose:

bash
Copy code
docker-compose down
7. Clean Up Docker Resources
To remove unused Docker containers, images, and volumes:

bash
Copy code
docker system prune -a
Troubleshooting
Backend Not Starting: Ensure that your Go application is listening on 0.0.0.0 (instead of localhost) to be accessible inside the Docker container.

go
Copy code
http.ListenAndServe("0.0.0.0:8080", nil)
Frontend Not Connecting to WebSocket: When using Docker Compose, the frontend should connect to http://backend:8080 (not http://localhost:8080).

Conclusion
Now you have a fully containerized chat application with React for the frontend and Go with WebRTC for the backend, running on Docker. Docker Compose helps in managing both services easily.

