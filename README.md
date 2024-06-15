# PunnyPix

## Project Overview

=> a web app that allows users to upload photos and add notes (hopefully automatically pull captions from photos), with the added functionality of automatic punny caption generation using generative AI

## Project Plan

### Core Technologies

**Front End**

- Redux with React to manage states
- Relay for GraphQL data fetching

**Backend**

- Node.js
- (Apollo Server)[https://www.apollographql.com/docs/apollo-server/getting-started]
- (Mongoose)[https://mongoosejs.com/docs/guide.html]
- Hack using hhvm

**GenAI**

- PyTorch for automatic punny caption generation

**Database, Storage, and Deployment**

    - MongoDB
    - GCP

## Getting Started

### Prerequisites

- Node.js
- NPM

# TODO ^ and below

#### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/nikikim01/PunnyPix.git

cd backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root of the backend directort to add the following environment variables:

# TODO below

```

```

#### Frontend setup

1. Navigate to frontend directory

```bash
cd ../frontend
```

2. Run frontend development server
   `npm start`

## Testing

`npm test`

(jest and supertest reference)[https://medium.com/@csalazar94/javascript-testing-made-easy-a-step-by-step-guide-with-jest-and-supertest-8e2a35f13506]
