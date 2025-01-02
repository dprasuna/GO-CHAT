# Chat Application with GO - REACT - Docker

This repository contains a chat application built using **React** for the frontend and **Go** with **WebRTC** for the backend. Docker is used to containerize both the frontend and backend, making it easy to deploy the application on any machine with Docker installed.

## Demo Video

Watch the demo video to see the application in action:
[Demo Video]([https://link-to-your-video.com](https://youtu.be/DUJtIEm6qGY?si=jWa0q6fFDAg29pha))

## Prerequisites

Before you can run this application, make sure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose (Optional)**: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Folder Structure

```plaintext
chatapplication/
├── backend/
│   ├── Dockerfile        # Dockerfile for Go WebRTC server
│   ├── go.mod            # Go module definition
│   ├── go.sum            # Go module dependencies
│   └── main.go           # Main Go application file
├── frontend/
│   ├── Dockerfile        # Dockerfile for React frontend
│   ├── package.json      # React dependencies
│   └── src/              # React app source code
└── docker-compose.yml    # Optional: Docker Compose file to manage both services

#Steps to Set Up and Run
1. Clone the Repository
Clone the repository to your local machine:
git clone <repository-url>
cd chatapplication

#2. Build and Run Backend (Go + WebRTC)
a. Navigate to the backend folder
cd backend

#b. Build the Docker image for the Go backend
To build the Docker image for the backend, run the following command:
docker build -t websocket-backend .

This command will create a Docker image for the Go backend. The Go application will listen on port 8080 inside the container.

#c. Run the backend container
After building the image, you can run the backend container with the following command:
docker run -d -p 8080:8080 --name websocket-backend websocket-backend



#. Access the Application
Once both containers are running:

#Frontend: Open http://localhost:3000 in your browser.
Backend: The backend WebSocket server will be running on port 8080, but this is typically not accessed directly from the browser.
#. Stopping the Containers
To stop the containers, you can run:
docker stop frontend-app websocket-backend

