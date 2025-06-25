import React, { useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RecipeList from '../components/RecipeList'
import RecipeModal from '../components/RecipeModal'
import { receitasMock } from '../data/receitas'

export default function Home() {
  const [receitas, setReceitas] = useState(receitasMock)
  const [modalAberto, setModalAberto] = useState(false)
  const [receitaSelecionada, setReceitaSelecionada] = useState(null)

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

  const fecharModal = () => {
    setReceitaSelecionada(null)
    setModalAberto(false)
  }

  return (
    <div>
      <Header />
      <SearchBar aoBuscar={buscarPorIngrediente} />
      <Filters />
      <RecipeList receitas={receitas} aoClicar={abrirModal} />
      {modalAberto && (
        <RecipeModal receita={receitaSelecionada} aoFechar={fecharModal} />
      )}
    </div>
  )
}