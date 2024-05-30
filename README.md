# Student-Backend
# Student Training Platform



## Project Description

This web application facilitates student registration for a training platform. Students can create secure accounts with relevant details and browse available courses. The platform leverages JSON Web Tokens (JWT) for robust authentication, ensuring data security. React.js is employed for the user interface, styled with Tailwind CSS for a consistent and responsive design. The backend is powered by Express.js, enabling efficient API handling. Axios facilitates seamless communication between the front-end and back-end components, while Yup validation safeguards data integrity through robust input validation.

## Features

1. Course CRUD operations
2. Student CRUD operations
3. Student opt-in/opt-out for training
4. Authentication and Authorization for all APIs
5. Proper exception handling

## Technologies Used

- *Frontend*:
  - React.js
  - Tailwind CSS
  - Axios
  - Yup for validation

- *Backend*:
  - Node.js
  - Express.js
  - MongoDB (or any other database)
  - JWT for Authentication

## Setup

### Prerequisites

- Node.js installed
- MongoDB installed and running (or any other database)
- Git installed
- A .env file with the following environment variables:
  ```plaintext
  JWT_SECRET=your_jwt_secret_key
 