# Blog App

Frontend for the Blog platform built with React and Tailwind CSS.

## Tech Stack

- React + Vite
- Tailwind CSS + daisyUI
- React Router
- Axios
- Zod Validation
- React Hot Toast

## Getting Started

1. Clone the repo
   git clone https://github.com/YOUR_USERNAME/blog-frontend.git
   cd blog-frontend

2. Install dependencies
   npm install

3. Create a .env file
   VITE_API_URL=http://localhost:3000/api

4. Run the app
   npm run dev

## Pages

| Path           | Description              | Auth Required |
|----------------|--------------------------|---------------|
| /              | Home — all posts         | No            |
| /post/:id      | Single post              | No            |
| /my-posts      | My posts                 | Yes           |
| /create-post   | Create new post          | Yes           |
| /edit/:id      | Edit post                | Yes           |
| /register      | Register                 | No            |
| /login         | Login                    | No            |
| /about         | About page               | No            |
| /contact-us    | Contact page             | No            |

## Deployment

Deployed on Vercel. Add these environment variables in your Vercel project:
- VITE_API_URL — your deployed backend URL e.g. https://blog-backend.vercel.app/api
