import React, { useState, useEffect } from 'react';
import InputNumber from './components/InputNumber';
import Message from './components/Message';
import RestartButton from './components/RestartButton';

function Game() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Inicializa el número aleatorio
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
    setUserGuess("");
    setMessage("");
    setGameOver(false);
    setAttempts(0);
    console.log("Número generado:", number); // 👀 Para pruebas
  };

  const handleGuess = () => {
    if (!userGuess) return;
    const guess = Number(userGuess);
    setAttempts(attempts + 1);

    if (guess === randomNumber) {
      setMessage(`🎉 ¡Correcto! El número era ${randomNumber}`);
      setGameOver(true);
    } else if (guess < randomNumber) {
      setMessage("🔼 El número es mayor");
    } else {
      setMessage("🔽 El número es menor");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>🎯 Adivina el Número</h1>
      {!gameOver && (
        <InputNumber
          value={userGuess}
          setValue={setUserGuess}
          onGuess={handleGuess}
        />
      )}
      <Message text={message} />
      {gameOver && <RestartButton onRestart={startNewGame} />}
      <p>Intentos: {attempts}</p>
    </div>
  );
}

export default Game;
