# Todo Backend API

Backend API for Todo Application built with Node.js, Express, and MongoDB.

## Features

- Create Todo
- Get Todos
- Update Todo
- Delete Todo

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation 

```bash
npm install
npm run dev

API Endpoints

GET /api/todos
POST /api/todos
PUT /api/todos/:id
DELETE /api/todos/:id

## Recommended Backend Flow

Project Setup
   ↓
Express Server
   ↓
MongoDB Connection
   ↓
Model
   ↓
Routes
   ↓
Controllers
   ↓
Middleware
   ↓
Testing APIs
   ↓
README
   ↓
Push to GitHub


todo-backend/
│
├── src/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── todoController.js
│   │
│   ├── models/
│   │   └── todoModel.js
│   │
│   ├── routes/
│   │   └── todoRoutes.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── utils/
│   │
│   ├── app.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
├── README.md
