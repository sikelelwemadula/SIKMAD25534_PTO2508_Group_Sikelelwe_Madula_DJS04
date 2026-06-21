# Podcast Explorer App - DJS04

As part of an ongoing project at CodeSpace, we were required to build a React + Vite application for browsing podcasts with search, sort, genre filtering, and pagination. 

## Overview

This project loads podcast data from a remote API and displays it as a responsive card grid. The app includes:
- Search by podcast title
- Filter by genre
- Sort by title or update date
- Pagination with dynamic page sizing
- Error and loading states for API requests

## Tech stack

- React 19
- Vite 8
- ESLint
- CSS Modules

## Key files

- `src/main.jsx` — application entry point
- `src/App.jsx` — root layout and data fetching
- `src/context/PodcastContext.jsx` — search/filter/sort/pagination state
- `src/api/fetchPodcasts.js` — remote API fetch logic
- `src/data.js` — genre metadata used by filters and cards
- `src/components/` — UI components for header, search, filters, grid, cards, and pagination
- `src/utils/formatDate.js` — helper for formatting update timestamps

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available scripts

- `npm run dev` — start Vite development server
- `npm run build` — build production bundle
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint on the project

## Notes

- The app fetches podcasts from `https://podcast-api.netlify.app/shows`.
- If the API request fails, the app displays an error message.
- The UI is designed to adapt page size based on window width.

## Project structure

```
public/
src/
  api/
    fetchPodcasts.js
  components/
    GenreFilter.jsx
    Header.jsx
    Pagination.jsx
    PodcastCard.jsx
    PodcastGrid.jsx
    SearchBar.jsx
    SortSelect.jsx
  context/
    PodcastContext.jsx
  utils/
    formatDate.js
  App.jsx
  main.jsx
  data.js
```
