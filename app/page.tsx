"use client";
import { useEffect} from "react";
import { useStore } from "./store/useStore";

const HomePage = () => {
  const {
    cards,
    flippedCards,
    moves,
    gameStatus,
    shuffleCards,
    flipCard,
    resetGame,
  } = useStore();



  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

 

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-900 to-black"  text-gray-100 dark:text-white transition-all`}
    >
      <div className="p-6 text-center flex justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest">
          Memory Match Game
        </h1>
      </div>

      {/* Winning Notification */}
      {gameStatus === "won" && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl text-center animate-bounce space-y-4 transform transition-transform duration-500">
            <h2 className="text-3xl font-bold text-green-400 animate-pulse">
              Congratulations!
            </h2>
            <p className="text-lg">
              You won the game in <span className="font-semibold">{moves}</span> moves!
            </p>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Game Status */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 space-y-4 md:space-y-0">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {gameStatus === "won" ? `You Won!` : `Moves: ${moves}`}
        </h2>
        <button
          onClick={resetGame}
          className="px-5 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
        >
          Reset Game
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
        {cards.map((card, index) => (
          <div key={card.id} className="relative">
            <div
              onClick={() => flipCard(index)}
              className={`w-full h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center rounded-lg shadow-lg transform transition-all duration-500 ${
                card.flipped || flippedCards.includes(index)
                  ? "bg-indigo-500 text-white rotate-y-180"
                  : "bg-gray-700"
              } cursor-pointer hover:scale-105 perspective`}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${
                  card.flipped || flippedCards.includes(index)
                    ? "rotate-y-180"
                    : ""
                }`}
              >
                {card.flipped || flippedCards.includes(index) ? (
                  <span className="text-2xl md:text-3xl">{card.value}</span>
                ) : (
                  <span className="text-4xl md:text-5xl text-gray-400">?</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
