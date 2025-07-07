import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RecipeModal from '../components/RecipeModal'
import Carousel3D from '../components/Carousel3D'
import { receitasMock } from '../data/receitas'

export default function Home() {
  const [receitas, setReceitas] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [receitaSelecionada, setReceitaSelecionada] = useState(null)

  useEffect(() => {
    setReceitas(receitasMock || [])
  }, [])

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem('favoritos')) || []
    setFavoritos(salvos)
  }, [])

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  const buscarPorIngrediente = (ingrediente) => {
    if (!ingrediente || ingrediente.trim() === '') {
      setReceitas(receitasMock)
      return
    }

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

  const toggleFavorito = (id) => {
    setFavoritos((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((fid) => fid !== id)
        : [...anteriores, id]
    )
  }

  return (
    <div style={{ paddingBottom: '2rem' }}>
      <Header />
      <SearchBar aoBuscar={buscarPorIngrediente} />
      <Filters />

      {receitas.length > 0 ? (
        <Carousel3D
          receitas={receitas}
          aoClicar={abrirModal}
          aoFavoritar={toggleFavorito}
          favoritos={favoritos}
        />
      ) : (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          Nenhuma receita encontrada 🍽️
        </p>
      )}

      {modalAberto && receitaSelecionada && (
        <RecipeModal
          receita={receitaSelecionada}
          aoFechar={() => setModalAberto(false)}
        />
      )}
    </div>
  )
}