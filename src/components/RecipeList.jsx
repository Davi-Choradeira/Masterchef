import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeList({ receitas = [], favoritos = [], aoFavoritar, aoClicar }) {
  if (!Array.isArray(receitas) || receitas.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Nenhuma receita disponível no momento.</p>
  }

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
    marginTop: '2rem',
    paddingBottom: '2rem',
    width: '100%',
    maxWidth: '1400px',
    marginInline: 'auto'
  }
}