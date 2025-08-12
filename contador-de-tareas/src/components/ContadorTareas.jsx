import React, { useState, useEffect, useMemo } from 'react';

function ContadorTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

  // Cálculo de tiempo total optimizado con useMemo
  const tiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // Efecto secundario: Actualizar el título del documento
  useEffect(() => {
    document.title = `Total: ${tiempoTotal} minutos`;
  }, [tiempoTotal]);

  // Agregar nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() && duracion) {
      setTareas([...tareas, { nombre: nuevaTarea, duracion: parseInt(duracion) }]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Contador de Tareas</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <h2>Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea.nombre}: {tarea.duracion} minutos
          </li>
        ))}
      </ul>

      <h3>Total de tiempo: {tiempoTotal} minutos</h3>
    </div>
  );
}

export default ContadorTareas;
