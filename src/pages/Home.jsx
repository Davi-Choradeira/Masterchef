import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RecipeCarousel from '../components/RecipeCarousel'
import RecipeModal from '../components/RecipeModal'
import { receitasMock } from '../data/receitas'

export default function Home() {
  const [receitas, setReceitas] = useState(receitasMock)
  const [favoritos, setFavoritos] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [receitaSelecionada, setReceitaSelecionada] = useState(null)

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem('favoritos')) || []
    setFavoritos(salvos)
  }, [])

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  const buscarPorIngrediente = (ingrediente) => {
    const resultado = receitasMock.filter((r) =>
      r.ingredientes.some((i) =>
        i.toLowerCase().includes(ingrediente.toLowerCase())
      )
    )
    setReceitas(resultado)
  }

  const abrirModal = (receita) => {
    setReceitaSelecionada(receita)
    setModalAberto(true)
  }

  return (
    <div>
      <Header />
      <SearchBar aoBuscar={buscarPorIngrediente} />
      <Filters />
      <RecipeCarousel receitas={receitas} aoClicar={abrirModal} />
      {modalAberto && receitaSelecionada && (
        <RecipeModal receita={receitaSelecionada} aoFechar={() => setModalAberto(false)} />
      )}
    </div>
  )
}