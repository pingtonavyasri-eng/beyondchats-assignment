<<<<<<< HEAD
# BeyondChats – Full Stack AI Content Pipeline

This repository contains a **complete end-to-end system** built as part of the BeyondChats assignment.

The project demonstrates how original blog content can be:
- Scraped
- Analyzed against top-ranking competitor articles
- AI-enhanced using an LLM
- Republished
- Displayed via a modern frontend

All phases are implemented inside **one monolithic repository** as required.

----------------------------------------------------------------------------------------------------

## High-Level Architecture

┌────────────┐
│ Scraper │ (Laravel Artisan Command)
└─────┬──────┘
│
▼
┌────────────┐
│ Database │ (SQLite)
└─────┬──────┘
│
▼
┌────────────┐
│ REST APIs │ (Laravel CRUD APIs)
└─────┬──────┘
│
▼
┌────────────┐
│ NodeJS AI │ (Search → Scrape → Rewrite)
│ Processor │
└─────┬──────┘
│
▼
┌────────────┐
│ React UI │ (Article Viewer)
└────────────┘

----------------------------------------------------------------------------------------------------

## Repository Structure

.
├── beyondchats-backend/ # Phase 1 – Laravel backend
│ └── README.md
│
├── node-processor/ # Phase 2 – NodeJS AI pipeline
│ └── README.md
│
├── beyondchats-frontend/ # Phase 3 – React frontend
│ └── README.md
│
└── README.md

----------------------------------------------------------------------------------------------------

## Phase Breakdown

### 🔹 Phase 1 – Laravel Backend (Content & APIs)

- Laravel 12 backend
- SQLite database
- Article scraping via Artisan command
- REST APIs for:
  - Fetching articles
  - Fetching latest article
  - Updating articles (AI-enhanced versions)

Detailed documentation:  
 `beyondchats-backend/README.md`

----------------------------------------------------------------------------------------------------

### 🔹 Phase 2 – NodeJS AI Processing Pipeline

A NodeJS script that:
1. Fetches the latest article from Laravel APIs
2. Searches Google (fallback strategy applied)
3. Identifies competitor articles
4. Scrapes competitor content
5. Calls an LLM to rewrite the original article
6. Publishes the updated article back via Laravel APIs
7. Adds citation links at the bottom

Detailed documentation:  
 `node-processor/README.md`

----------------------------------------------------------------------------------------------------

### Phase 3 – React Frontend

A React-based UI that:
- Fetches articles from Laravel APIs
- Displays original vs AI-enhanced articles
- Allows filtering and expand/collapse interactions
- Provides a clean, readable presentation

Detailed documentation:  
 `beyondchats-frontend/README.md`

----------------------------------------------------------------------------------------------------

## Local Setup (Quick Start)

### Backend (Laravel)

``bash
cd beyondchats-backend

composer install
php artisan migrate
php artisan serve
Backend runs at:

http://127.0.0.1:8000

### AI Processor (NodeJS)

``bash

cd node-processor
npm install
node index.js

### Frontend (React)

``bash

cd beyondchats-frontend
npm install
npm run dev

Frontend runs at: http://localhost:5173

----------------------------------------------------------------------------------------------------

## Frontend Live Link: 

----------------------------------------------------------------------------------------------------

## Known Limitations

- Google search scraping uses fallback strategies due to rate limits
- LLM output quality depends on prompt tuning
- Styling prioritizes clarity over heavy UI frameworks
- These trade-offs were made intentionally within time constraints.


>>>>>>> 3b00bea5515da5f656c88f10bc04ada2e574ff88
