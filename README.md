# DevPups – React SPA

## Overview
DevPups is a single-page React application built to browse, filter, and shortlist puppy profiles. The project demonstrates core React concepts including functional components, hooks, controlled inputs, global state management via Context API, and API-driven UI updates. Data and images are fetched from an external Laravel API.

---

## Features
- Search and filter puppies based on character traits.
- Shortlist management with add/remove interactions.
- Real-time “like” toggling and UI updates for individual puppies.
- Form for uploading new puppy profiles, including multipart image upload support.
- Dynamic rendering and re-fetching of data from an API backend.
- Client-side state management using React hooks and Context.

---

## Tech Stack
- **React** (functional components, `useState`, `useEffect`, Context API)
- **TypeScript**
- **Tailwind CSS**

---

## Backend API
This project relies on a separate Laravel API that provides:

- Puppy listings
- Puppy creation and image upload handling
- Like toggling for individual puppies

The backend code, setup instructions, and database seeding details are available in the official repository:

**Laravel API Repository:**  
https://github.com/laracasts/react-from-scratch-api

Follow the instructions in that repository to run the API locally.

---

## Running the React Application

Install dependencies:
```bash
  npm install
```
Start the development server:

```bash
  npm run dev
```

Ensure the Laravel API is running locally so the application can fetch data and upload images.