# TMDB Cards

This project was setup using Vite + React. The project shows 20 trending movies of the day by default and allows user to search throughout the TMDB for other movies as well.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Used](#technologies-used)

## Demo

Here is the [link](https://tmdb-cards.vercel.app) to checkout the live demo.

## Features

- View trending movies of the day
- Search for movies by title
- Click on a movie to view details
- Toggle between light and dark mode

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bloodmonk7/tmdb-cards.git
   cd tmdb-cards

   ```

2. Install dependencies by running the following command:

   ```bash
   yarn

   ```

3. Usage

   - Obtain an API key from [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api) and replace value of MY_KEY in MovieList.jsx with your API key or create a `.env` file in global scope(same level as `node_modules`) and add your API key as:

   ```bash
   VITE_API_KEY=API_KEY_VALUE

   ```

4. Start the development server:

   ```bash
   yarn dev or yarn run dev
   ```

## Technologies Used

- React
- Fetch API for data retrieval
- Tailwind CSS for styling
- [The Movie Database (TMDb) API](https://developer.themoviedb.org/reference/intro/getting-started) for movie data
