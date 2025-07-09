import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RecipeList from '../components/RecipeList'
import { receitasMock } from '../data/receitas'

export default function Home() {
  const [receitas, setReceitas] = useState(receitasMock)
  const [favoritos, setFavoritos] = useState([])

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

  const filtrarPorCategoria = (categoria) => {
    const resultado = receitasMock.filter((r) =>
      r.tags && r.tags.includes(categoria)
    )
    setReceitas(resultado)
  }

  const toggleFavorito = (id) => {
    setFavoritos((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((fid) => fid !== id)
        : [...anteriores, id]
    )
  }

  const abrirReceita = (receita) => {
    console.log('Receita selecionada:', receita.titulo)
  }

  return (
    <div style={styles.container}>
      <SearchBar aoBuscar={buscarPorIngrediente} />
      <Filters aoFiltrar={filtrarPorCategoria} />
      <RecipeList
        receitas={receitas}
        favoritos={favoritos}
        aoFavoritar={toggleFavorito}
        aoClicar={abrirReceita}
      />
    </div>
  )
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}