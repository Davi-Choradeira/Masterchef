import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RecipeList from '../components/RecipeList'
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

  const toggleFavorito = (id) => {
    setFavoritos((favoritosAnteriores) =>
      favoritosAnteriores.includes(id)
        ? favoritosAnteriores.filter((fid) => fid !== id)
        : [...favoritosAnteriores, id]
    )
  }

  const abrirModal = (receita) => {
    setReceitaSelecionada(receita)
    setModalAberto(true)
  }

  const fecharModal = () => {
    setReceitaSelecionada(null)
    setModalAberto(false)
  }

  return (
    <div>
      <Header />
      <SearchBar aoBuscar={buscarPorIngrediente} />
      <Filters />
      <RecipeList
        receitas={receitas}
        favoritos={favoritos}
        aoFavoritar={toggleFavorito}
        aoClicar={abrirModal}
      />
      {modalAberto && (
        <RecipeModal receita={receitaSelecionada} aoFechar={fecharModal} />
      )}
    </div>
  )
}