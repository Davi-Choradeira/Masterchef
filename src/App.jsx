import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}