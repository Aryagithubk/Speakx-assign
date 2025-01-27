# QuestSearch Project

QuestSearch is a question-searching web application built using **ReactJS** for the frontend and **NodeJS** with **gRPC** for the backend. It allows users to search for questions from a database and view detailed information about the questions.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## Technologies Used
- **Frontend**: ReactJS
- **Backend**: NodeJS, gRPC, MongoDB
- **Tools**: Postman (for API testing)

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <your-project-folder>
   ```

2. Navigate to the backend directory (if it's separate):
   ```bash
   cd backend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Set up the database connection (make sure MongoDB is running locally or configure the connection in your `config/db.js` file).

5. Start the gRPC server:
   ```bash
   node app.js
   ```

   The gRPC server will be available at `http://localhost:50051`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend React app:
   ```bash
   npm start
   ```

   The React app will be available at `http://localhost:3000`.

### Running the Project

Once both the backend and frontend are running, you can interact with the application. The frontend will call the gRPC backend to search for questions, and the results will be displayed in the user interface.

## API Documentation

The backend exposes the following gRPC API:

### `SearchQuestions`

- **Method**: `POST`
- **URL**: `/QuestionService/SearchQuestions`
- **Request body**:
  ```json
  {
    "query": "your search query"
  }
  ```

- **Response**:
  ```json
  {
    "questions": [
      {
        "id": "question-id",
        "title": "Question Title",
        "type": "Question Type"
      }
    ],
    "totalPages": 5,
    "currentPage": 1
  }
  ```

## Troubleshooting

- **Error: `Http response at 400 or 500 level, http status code: 0`**
  - Ensure that your gRPC server is running and accessible at `http://localhost:50051`.

- **Error: `net::ERR_INVALID_HTTP_RESPONSE`**
  - Double-check your backend and frontend configurations for correct URL handling.
