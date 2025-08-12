import React, { useEffect } from 'react';

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`🌍 ¡El planeta ${nombre} ha aparecido!`);
    return () => {
      console.log(`💨 ¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      {nombre}
    </div>
  );
}

export default Planeta;
