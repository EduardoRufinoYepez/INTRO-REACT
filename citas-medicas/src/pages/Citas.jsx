import { Link } from 'react-router-dom';

function Citas() {
  // Ejemplo de citas
  const citas = [
    { id: 1, nombre: 'Juan Pérez', fecha: '2025-08-14' },
    { id: 2, nombre: 'María López', fecha: '2025-08-15' },
    { id: 3, nombre: 'Carlos Sánchez', fecha: '2025-08-16' }
  ];

  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              {cita.nombre} - {cita.fecha}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
