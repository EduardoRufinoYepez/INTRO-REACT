import React from 'react';

function RestartButton({ onRestart }) {
  return (
    <button onClick={onRestart} style={{ marginTop: "10px" }}>
      🔄 Reiniciar juego
    </button>
  );
}

export default RestartButton;
