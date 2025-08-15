import { useParams } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
      {/* Aquí podrías mostrar más detalles desde una base de datos o estado */}
    </div>
  );
}

export default CitaDetalle;
