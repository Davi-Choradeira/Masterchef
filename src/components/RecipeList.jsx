import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeList({ receitas, favoritos, aoFavoritar, aoClicar }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {receitas.map((r) => (
        <RecipeCard
          key={r.id}
          receita={r}
          aoFavoritar={aoFavoritar}
          aoClicar={aoClicar}
          isFavorita={favoritos.includes(r.id)}
        />
      ))}
    </div>
  )
}