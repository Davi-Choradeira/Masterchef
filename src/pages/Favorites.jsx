import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import RecipeList from '../components/RecipeList'
import { receitasMock } from '../data/receitas'

export default function Favorites() {
  const [favoritos, setFavoritos] = useState([])
  const [receitasFavoritas, setReceitasFavoritas] = useState([])

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem('favoritos')) || []
    setFavoritos(salvos)
  }, [])

  useEffect(() => {
    const filtradas = receitasMock.filter((r) => favoritos.includes(r.id))
    setReceitasFavoritas(filtradas)
  }, [favoritos])

  const toggleFavorito = (id) => {
    const atualizados = favoritos.includes(id)
      ? favoritos.filter((fid) => fid !== id)
      : [...favoritos, id]
    setFavoritos(atualizados)
    localStorage.setItem('favoritos', JSON.stringify(atualizados))
  }

  return (
    <div>
      <Header />
      <h2 style={{ marginTop: '1rem' }}>Minhas Receitas Favoritas 💖</h2>

      {receitasFavoritas.length > 0 ? (
        <RecipeList
          receitas={receitasFavoritas}
          favoritos={favoritos}
          aoFavoritar={toggleFavorito}
          aoClicar={() => {}}
        />
      ) : (
        <p style={{ padding: '1rem', fontStyle: 'italic' }}>
          Você ainda não favoritou nenhuma receita.
        </p>
      )}
    </div>
  )
}