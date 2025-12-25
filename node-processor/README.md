## Node.js Content Processing Pipeline

This directory contains the **Node.js-based processing pipeline** implemented for Phase 2 of the BeyondChats engineering assignment.

The goal of this phase is to fetch an existing article, enrich it using external references and an LLM, and publish the updated article back to the backend using the previously created APIs.

----------------------------------------------------------------------------------------------------

## Objectives

- Fetch the latest article from the Laravel backend
- Search for relevant competitor articles on the web
- Scrape readable content from external sources
- Use an LLM to rewrite and enhance the original article
- Publish the AI-enhanced article back to the backend
- Cite reference articles used for rewriting

----------------------------------------------------------------------------------------------------

## Technology Stack

- **Runtime:** Node.js
- **HTTP Client:** Axios
- **HTML Parsing:** Cheerio
- **Search:** Google
- **LLM:** OpenAI-compatible API
- **Integration:** REST APIs exposed by Phase 1 backend

----------------------------------------------------------------------------------------------------

## High-Level Processing Flow

- Fetch latest article from backend
- Build a meaningful search query
- Attempt Google search for competitor articles
- Fallback to DuckDuckGo / curated sources if blocked
- Scrape readable content from top 2 external articles
- Rewrite original article using LLM
- Append reference links
- Publish updated article using backend APIs

----------------------------------------------------------------------------------------------------

## Key Files

- index.js → Main orchestration script
- google.js → Web search logic with fallbacks
- scrape.js → External article scraping logic
- llm.js → LLM prompt & rewrite logic
- publish.js → API integration with backend

----------------------------------------------------------------------------------------------------

## Local Setup Instructions

### Install dependencies

```bash
npm install

### Run the processor

```bash
node index.js

----------------------------------------------------------------------------------------------------

### Search & Scraping Strategy
- Primary approach attempts Google Search
- Due to real-world scraping restrictions, Google may block automated requests
- A DuckDuckGo-based fallback and curated authoritative sources are used
- This ensures pipeline reliability and continuity
- This approach reflects real-world engineering trade-offs rather than brittle scraping logic.

---------------------------------------------------------------------------------------------------- 
## LLM Processing Details

Input includes:
    - Original article content
    - Content from two external competitor articles
    - Output focuses on:
    - Improved structure and formatting
    - Clearer tone and flow
    - Preserving original intent
    - Reference links are appended at the bottom of the rewritten article

----------------------------------------------------------------------------------------------------
## Known Limitations

- Google Search scraping may be blocked at runtime
- Main-content extraction is heuristic-based, not semantic
- LLM output quality depends on prompt configuration and API limits
- These limitations are intentional trade-offs aligned with the assignment scope.