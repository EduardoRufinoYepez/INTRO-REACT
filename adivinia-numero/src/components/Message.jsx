import React from 'react';

function Message({ text }) {
  if (!text) return null; // No muestra nada si no hay mensaje
  return <p style={{ fontWeight: "bold" }}>{text}</p>;
}

export default Message;
