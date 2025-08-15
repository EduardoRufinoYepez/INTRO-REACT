import { Link } from "react-router-dom";

const Home = ({ user, logout }) => {
  return (
  <div className="container">
    <h1>Bienvenido a Twitter</h1>
    {user ? (
      <>
        <p>Hola, {user.username}!</p>
        <button onClick={logout}>Cerrar sesión</button>
        <br />
        <Link to="/profile">Ir a mi perfil</Link>
      </>
    ) : (
      <Link to="/login">Iniciar sesión</Link>
    )}
  </div>
);

};

export default Home;
