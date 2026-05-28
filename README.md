# Todo Backend API

A simple and scalable RESTful Backend API for a Todo Application built using **Node.js**, **Express.js**, and **MongoDB**.

---

## Features

* Create Todo
* Get All Todos
* Update Todo
* Delete Todo
* RESTful API Structure
* MongoDB Database Integration
* Error Handling Middleware

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* nodemon

---

# Project Structure

```bash
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
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd todo-backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 4. Run the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

# API Endpoints

## Get All Todos

```http
GET /api/todos
```

### Response

```json
[
  {
    "_id": "64a123456789",
    "title": "Learn Backend",
    "description": "backend first part"
  }
]
```

---

## Create Todo

```http
POST /api/todos
```

### Request Body

```json
{
  "title": "Build Todo API",
  "description": "backend first part"
}
```

---

## Update Todo

```http
PUT /api/todos/:id
```

### Request Body

```json
{
  "description": "backend first part"
}
```

---

## Delete Todo

```http
DELETE /api/todos/:id
```

---

# Recommended Backend Development Flow

```text
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
```

---

# Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

# Dependencies

```bash
npm install express mongoose dotenv
```

### Dev Dependency

```bash
npm install --save-dev nodemon
```

---

# Testing APIs

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

---

# Future Improvements

* User Authentication
* JWT Authorization
* Validation
* Pagination
* Search & Filter
* Deployment

---

# Author

Made with ❤️ using Node.js and MongoDB.
