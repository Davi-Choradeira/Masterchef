import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeList({ receitas, favoritos, aoFavoritar, aoClicar }) {
  return (
    <div style={styles.container}>
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

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
    backgroundColor: '#121212',     // fundo escuro estiloso
    borderRadius: '12px',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'center'
  }
}