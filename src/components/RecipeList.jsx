import RecipeCard from './RecipeCard'

export default function RecipeList({ receitas, aoClicar }) {
  if (receitas.length === 0) {
    return <p style={{ padding: '1rem' }}>Nenhuma receita encontrada 😢</p>
  }

  return (
    <div style={{ padding: '1rem' }}>
      {receitas.map((r) => (
        <RecipeCard key={r.id} receita={r} aoClicar={aoClicar} />
      ))}
    </div>
  )
}