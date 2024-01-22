import React, { useState, useEffect } from 'react';
import confetti from "canvas-confetti"
import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';
import { Selector } from './components/Selector';

function App() {
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [randomSelector, setRandomSelector] = useState(null);
  const [animationRunning, setAnimationRunning] = useState(false);
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    let intervalId;

    if (animationRunning) {
      intervalId = setInterval(() => {
        setSelectedSquare((prevSquare) => (prevSquare + 1) % 13); 
      }, 100); 
    }

    return () => clearInterval(intervalId);
  }, [animationRunning]);

  const startGame = () => {
    setSelectedSquare(0);
    setRandomSelector(Math.round(Math.random() * 12));
    setAnimationRunning(true);
    setWinner(null)
  };

  const stopGame = () => {
    setAnimationRunning(false);

    selectedSquare === randomSelector ? (setWinner(true), confetti()) : setWinner(false) 
  };

  return (
    <main className="board">
      <h1>Atrapa el color</h1>
      <button onClick={startGame}>Comenzar del juego</button>
      <button onClick={stopGame}>Detener el color</button>
      <section className="game">
        {Array(13).fill(null).map((_, index) => (
          <Square
            key={index}
            isSelected={index === selectedSquare}
          >
            
          </Square>
        ))}
        {Array(13).fill(null).map((_, index) => (
          <Selector
            key={index}
            index={index}
            posicion={randomSelector}
          />
        ))}
      </section>

      <WinnerModal startGame={startGame} winner={winner} />

    </main>
  );
}

export default App;
