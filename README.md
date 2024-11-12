# Memory Match Game

This project is a Memory Match Game built with Next.js, Zustand for state management, Immer middleware, TypeScript, and Tailwind CSS for styling. The game allows users to match pairs of cards, tracks the number of moves, and displays a congratulatory message when the user completes the game.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Play](#how-to-play)
- [Available Scripts](#available-scripts)

## Features
- **Dark Mode**: Toggleable dark/light mode using Tailwind CSS.
- **Responsive Design**: Grid-based layout that adjusts for different screen sizes.
- **Game Mechanics**: Flip cards to reveal values and find matching pairs.
- **State Management**: Built using Zustand for efficient global state management.
- **End-of-Game Notification**: Shows a congratulatory notification on completion.
- **Move Counter**: Tracks the number of moves made by the player.

## Technologies Used
- **Next.js**: React framework for server-rendered applications.
- **TypeScript**: Type checking and improved development experience.
- **Zustand**: Lightweight state management library for React.
- **Immer**: Middleware for Zustand to allow immutable state updates.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, download them from the [Node.js official website](https://nodejs.org).

## Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/0xChintan/memory-match-game.git
   cd dashboard-widgets-zustand

2. **Install dependencies**:
   ```bash
   npm install

3. **Run the development server**:
   ```bash
   npm run dev

4. **Open http://localhost:3000 in your browser.**

## How to Play
The game board consists of a grid of hidden cards.
Click on a card to flip it and reveal the value.
Try to find matching pairs of cards by flipping two cards at a time.
If the two cards match, they remain flipped. If not, they will flip back after a short delay.
The game is won when all pairs have been matched. A notification will display your winning message and the number of moves.

## Available Scripts

**In the project directory, you can run**:

**npm run dev**: Starts the development server.

**npm run build**: Builds the application for production.

**npm start**: Runs the production build.# memory-match-game
