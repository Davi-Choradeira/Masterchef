import React, { useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RecipeList from '../components/RecipeList'

// Array mock com receitas de exemplo
const receitasMock = [
  {
    id: 1,
    titulo: "Arroz com Tomate",
    ingredientes: ["arroz", "tomate", "cebola"],
    tempo: "20 min"
  },
  {
    id: 2,
    titulo: "Omelete de Espinafre",
    ingredientes: ["ovo", "espinafre", "queijo"],
    tempo: "10 min"
  },
  {
    id: 3,
    titulo: "Macarrão ao Alho",
    ingredientes: ["macarrão", "alho", "azeite"],
    tempo: "15 min"
  }
]

export default function Home() {
  const [resultado, setResultado] = useState(receitasMock)

  function buscarReceitas(ingrediente) {
    const filtradas = receitasMock.filter((receita) =>
      receita.ingredientes.includes(ingrediente.toLowerCase())
    )
    setResultado(filtradas)
  }

  return (
    <div>
      <Header />
      <SearchBar aoBuscar={buscarReceitas} />
      <Filters />
      <RecipeList receitas={resultado} />
    </div>
  )
}