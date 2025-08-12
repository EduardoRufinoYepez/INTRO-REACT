function Tarjeta() {
  // Información estática de la tarjeta
  const nombre = "Eduardo Yepez";
  const profesion = "Desarrollador Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // JSX de la tarjeta
  return (
    <div style={{
      border: '1px solid #ff0000ff',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#ffababff'
    }}>
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;
