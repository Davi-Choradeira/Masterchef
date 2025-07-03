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
    setReceitasFavoritas(favoritos)
  }, [favoritos])

  const toggleFavorito = (id) => {
    const receita = receitasMock.find((r) => r.id === id)

    const jaFavoritado = favoritos.some((f) => f.id === id)

    const atualizados = jaFavoritado
      ? favoritos.filter((f) => f.id !== id)
      : [...favoritos, receita]

    setFavoritos(atualizados)
    localStorage.setItem('favoritos', JSON.stringify(atualizados))
  }

  const removerTodos = () => {
    setFavoritos([])
    setReceitasFavoritas([])
    localStorage.setItem('favoritos', JSON.stringify([]))
  }

  return (
    <div>
      <Header />
      <h2 style={{ margin: '1rem' }}>Minhas Receitas Favoritas 💖</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        flexWrap: 'wrap'
      }}>
        <span><strong>{receitasFavoritas.length}</strong> favoritos</span>
        {receitasFavoritas.length > 0 && (
          <button
            onClick={removerTodos}
            style={{
              background: '#f44336',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '0.5rem'
            }}
          >
            Remover todos 💥
          </button>
        )}
      </div>

      {receitasFavoritas.length > 0 ? (
        <RecipeList
          receitas={receitasFavoritas}
          favoritos={favoritos.map((f) => f.id)}
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