import { useState } from 'react'
import Widget from './components/Widget/Widget'
import './App.css'

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  return (
    <div className='container'>
      <h1>Mi Panel de Control</h1>

      {/* RENDERIZADO ORIGINAL CON OP TERNARIO */}
      {
        isLoggedIn
          ? (
            <Widget title='Perfil de Usuario'>
              <p><strong>Usuario:</strong> César Guerra</p>
              <p><strong>Rol:</strong> Administrador</p>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </Widget>
            )
          : (
            <Widget title='Iniciar Sesión'>
              <p>Por favor, inicia sesión para continuar</p>
              <button onClick={handleLogin}>Iniciar sesión</button>
            </Widget>
            )
      }

    </div>
  )
}

export default App
