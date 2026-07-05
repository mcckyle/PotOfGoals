# PotOfGoals

A simple, modern goal tracking application built with **Spring Boot** and **React**.

PotOfGoals is designed to make personal goal tracking feel calm and distraction-free. Instead of overwhelming users with unnecessary complexity, the application emphasizes clarity and a clean user experience.

---

## Features

* User registration and authentication
* Secure JWT-based authorization
* Personal dashboard
* Goal management
* User profile and account settings
* Responsive modern interface
* RESTful API architecture

---

## Technology Stack

### Frontend

* React
* Vite
* React Router
* React Hook Form
* CSS

### Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* JWT Authentication
* Gradle

### Database

* MySQL

---

## Repository Structure

```
├── pot-of-goals/
│   ├── src/
│   ├── build.gradle
│   └── ...
│
├── pot-of-goals-web/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

* **pot-of-goals** contains the Spring Boot REST API.
* **pot-of-goals-web** contains the React and Vite frontend.

---

## Getting Started

### Prerequisites

Install the following before running the project:

* Java 21 or newer
* Gradle
* Node.js
* npm
* MySQL

---

### Backend

```bash
cd pot-of-goals

./gradlew bootRun
```

The backend will start on its configured server port.

---

### Frontend

```bash
cd pot-of-goals-web

npm install
npm run dev
```

Vite will start the development server and display the local application URL.

---

## Development

The frontend communicates with the Spring Boot REST API over HTTP. Authentication is handled using JSON Web Tokens (JWT), allowing protected routes and authenticated API requests.

---

## Project Goals

PotOfGoals is built around a few guiding principles:

* Keep the interface simple.
* Prioritize usability over feature quantity.
* Build maintainable, well-structured code.
* Create a fast, responsive experience.
* Focus on helping users build consistent habits.

---

## License

This project is licensed under the MIT License.
