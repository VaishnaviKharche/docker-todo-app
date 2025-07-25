# 🐳 Dockerized Full-Stack To-Do List App

This is a beginner-friendly full-stack **To-Do List application** built using **React** (frontend) and **Node.js with Express** (backend), containerized using **Docker** and orchestrated with **Docker Compose**.

I built this project to strengthen my understanding of Docker, containerization, and basic DevOps practices by creating a fully functional environment from scratch.

---

## 🎯 Project Objective

To simulate real-world application deployment by:
- Building a full-stack app
- Containerizing both frontend and backend with Docker
- Managing services with Docker Compose
- Understanding container networking and volume management

This project reflects my **hands-on learning** approach and **effort to transition from development to DevOps-ready applications**.

---

## 🧰 Tech Stack & Tools

- **Frontend:** React
- **Backend:** Node.js + Express
- **Containerization:** Docker
- **Service Orchestration:** Docker Compose

---

## 🚀 Running the Project

> Make sure Docker and Docker Compose are installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/docker-todo-app.git
cd docker-todo-app
```

### 2. Start the App
```bash
docker-compose up --build
```

This will:
- Start the React frontend on `http://localhost:3000`
- Start the Node.js backend on `http://localhost:5000`

### 3. Stop the App
```bash
docker-compose down
```

---

## 📌 Features Implemented

- Add, view, delete to-do items
- Responsive UI built with React
- REST API with Node.js
- Frontend and backend fully containerized
- Isolated development environment using Docker Compose

---

## 🧠 What I Learned

- Creating Dockerfiles for frontend and backend
- Managing multi-container applications with Docker Compose
- Connecting containers using Docker networks
- Practical experience with DevOps tools

---

## 🐳 Docker Commands Used

### 📦 Build & Run Containers Individually
```bash
docker build -t frontend-image ./frontend
docker build -t backend-image ./backend

docker run -d -p 3000:3000 frontend-image
docker run -d -p 5000:5000 backend-image
```

### ⚙️ With Docker Compose
```bash
docker-compose up --build
docker-compose up
docker-compose down
docker-compose logs
docker-compose up --build frontend
```

### 🧹 Cleanup
```bash
docker container prune
docker image prune
```

---

## 📂 Project Structure

```
project-root/
│
├── frontend/              # React application
│   └── Dockerfile
│
├── backend/               # Node.js + Express API
│   └── Dockerfile
│
├── docker-compose.yml     # For service orchestration
└── README.md
```

---

## 🙋‍♀️ About Me

I'm **Vaishnavi Kharche**, a passionate full-stack developer currently exploring **DevOps tools** and best practices. This project showcases my ability to independently learn and apply containerization concepts through a working app.
