import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div>
      <BrowserRouter>
        <navbar />
        <appRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
