import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/favoritos" element={<Layout><Favorites /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}