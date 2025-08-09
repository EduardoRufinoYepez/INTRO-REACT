import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Characters from '../pages/characters'
import CharacterDetail from '../pages/characterDetail'
import NotFound from '../pages/notFound'

const appRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/characters/:id' element={<CharacterDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default appRoutes
