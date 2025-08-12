import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // useMemo → optimiza el mensaje del estado
  const mensajeEstado = useMemo(() => {
    console.log("Recalculando mensaje de estado...");
    return `Estado de la nave: ${estadoNave}`;
  }, [estadoNave]);

  // useEffect (Montaje y Desmontaje)
  useEffect(() => {
    console.log("🚀 ¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setDistancia(prev => prev + 10);
      setCombustible(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("🛑 El panel de control se ha apagado.");
    };
  }, []);

  // useEffect (Actualización)
  useEffect(() => {
    console.log("⛽ ¡Combustible actualizado!");
  }, [combustible]);

  // Función para aterrizar
  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    const planeta = `Planeta-${planetasVisitados.length + 1}`;
    setPlanetasVisitados([...planetasVisitados, planeta]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 Panel de Control</h1>
      <p>Distancia recorrida: {distancia} km</p>
      <p>Combustible restante: {combustible} %</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar} disabled={combustible <= 0}>
        Aterrizar
      </button>

      <h2>🪐 Planetas Visitados</h2>
      <div>
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </div>
    </div>
  );
}

export default App;
