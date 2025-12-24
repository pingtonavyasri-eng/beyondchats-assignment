## React Frontend (Articles Viewer)

This directory contains the **React.js frontend application** built for Phase 3 of the BeyondChats assignment.

The frontend consumes APIs created in Phase 1 and visually presents both **original** and **AI-enhanced** articles in a clean, responsive UI.

----------------------------------------------------------------------------------------------------

## Objectives

- Fetch articles from Laravel backend APIs
- Display original and AI-enhanced articles
- Provide filtering and expand/collapse interactions
- Maintain a professional and readable UI
- Keep the implementation lightweight and fast

----------------------------------------------------------------------------------------------------

## Technology Stack

- **Framework:** React (Vite)
- **Language:** JavaScript
- **Styling:** CSS (custom)
- **Data Source:** Laravel REST APIs

----------------------------------------------------------------------------------------------------

## Project Structure

src/
├── App.jsx → Main UI logic
├── main.jsx → React bootstrap
├── index.css → Global styling
└── assets/ → Static assets

----------------------------------------------------------------------------------------------------

## Local Setup Instructions

### Install dependencies

``bash
npm install

### Start development server

``bash
npm run dev

The application will be available at:
http://localhost:5173

Ensure the Laravel backend is running at http://127.0.0.1:8000

### Data Flow

React App
   ↓
Laravel API (/api/articles)
   ↓
Articles JSON Response
   ↓
Rendered in UI (Original vs AI Enhanced)

----------------------------------------------------------------------------------------------------

## Features Implemented

- Timeline-style article layout
- Expand / collapse article content
- Filter by:
   - All articles
   - Original articles
   - AI-enhanced articles
- Visual distinction between original and AI-enhanced content
- Responsive layout for different screen sizes

----------------------------------------------------------------------------------------------------

## Known Limitations

- Styling is intentionally simple due to time constraints
- No pagination or search implemented
- Backend URL is hardcoded for local development
- These trade-offs are aligned with the assignment scope.

----------------------------------------------------------------------------------------------------

Frontend demonstrates the ability to consume APIs, design usable interfaces, and present data clearly without unnecessary complexity.