import {create} from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
}

interface Store {
  cards: Card[];
  flippedCards: number[];
  moves: number;
  gameStatus: 'playing' | 'won';
  shuffleCards: () => void;
  flipCard: (index: number) => void;
  resetGame: () => void;
}

const initialCards = [
    { id: 1, value: 'A', flipped: false },
    { id: 2, value: 'B', flipped: false },
    { id: 3, value: 'C', flipped: false },
    { id: 4, value: 'D', flipped: false },
    { id: 5, value: 'E', flipped: false },
    { id: 6, value: 'F', flipped: false },
    { id: 7, value: 'G', flipped: false },
    { id: 8, value: 'H', flipped: false },
    { id: 9, value: 'I', flipped: false },
    { id: 10, value: 'A', flipped: false },
    { id: 11, value: 'B', flipped: false },
    { id: 12, value: 'C', flipped: false },
    { id: 13, value: 'D', flipped: false },
    { id: 14, value: 'E', flipped: false },
    { id: 15, value: 'F', flipped: false },
    { id: 16, value: 'G', flipped: false },
    { id: 17, value: 'H', flipped: false },
    { id: 18, value: 'I', flipped: false },
    // Add more pairs as needed for a bigger grid
  ];

export const useStore = create<Store>()(
  immer((set) => ({
    darkMode: false,
    cards: [],
    flippedCards: [],
    moves: 0,
    gameStatus: 'playing',

    // Shuffle and initialize cards at the start of the game
    shuffleCards: () => {
      const shuffled = [...initialCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, flipped: false }));
      set((state) => {
        state.cards = shuffled;
        state.moves = 0;
        state.flippedCards = [];
        state.gameStatus = 'playing';
      });
    },

    // Flip a card and check for matches
    flipCard: (index) => {
      set((state) => {
        if (state.flippedCards.length < 2 && !state.cards[index].flipped) {
          // Flip the card
          state.cards[index].flipped = true;
          state.flippedCards.push(index);

          // Check for a match if two cards are flipped
          if (state.flippedCards.length === 2) {
            state.moves += 1;
            const [firstIndex, secondIndex] = state.flippedCards;
            const firstCard = state.cards[firstIndex];
            const secondCard = state.cards[secondIndex];

            if (firstCard.value === secondCard.value) {
              // Cards match, leave them flipped
              state.flippedCards = [];
              
              // Check if all cards are matched
              if (state.cards.every((card) => card.flipped)) {
                state.gameStatus = 'won';
              }
            } else {
              // Cards don't match, flip them back after a delay
              setTimeout(() => {
                set((state) => {
                  state.cards[firstIndex].flipped = false;
                  state.cards[secondIndex].flipped = false;
                  state.flippedCards = [];
                });
              }, 1000);
            }
          }
        }
      });
    },

    // Reset the game state
    resetGame: () => {
      set((state) => {
        state.cards = [];
        state.flippedCards = [];
        state.moves = 0;
        state.gameStatus = 'playing';
      });
      set((state) => state.shuffleCards());
    },
  }))
);
