import React from 'react';

function InputNumber({ value, setValue, onGuess }) {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ingresa un número"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={onGuess}>Probar</button>
    </div>
  );
}

export default InputNumber;
