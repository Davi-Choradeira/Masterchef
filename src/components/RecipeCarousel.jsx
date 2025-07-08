import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeCarousel({ receitas, aoClicar, aoFavoritar, favoritos }) {
  if (!receitas || receitas.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Nenhuma receita disponível 🍽️</p>
  }

  return (
    <div style={styles.container}>
      <div style={styles.scrollArea}>
        {receitas.map((receita, index) => (
          <div key={receita.id} style={cardStyle(index, receitas.length)}>
            <RecipeCard
              receita={receita}
              aoClicar={aoClicar}
              aoFavoritar={aoFavoritar}
              isFavorita={favoritos.includes(receita.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    perspective: '1600px',
    overflowX: 'hidden',
    padding: '2rem 0',
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch'
  },
  scrollArea: {
    display: 'flex',
    gap: '5rem',
    padding: '0 2rem',
    scrollSnapType: 'x mandatory',
    overflowX: 'scroll',
    width: '100vw'
  }
}
const cardStyle = (index, total) => {
  const center = Math.floor(total / 2)
  const offset = index - center
  const scale = 1 - Math.abs(offset) * 0.04
  const rotateY = offset * 2.5

  return {
    scrollSnapAlign: 'center',
    transform: `rotateY(${rotateY}deg) scale(${scale})`,
    transition: 'transform 0.5s ease, filter 0.4s ease',
    minWidth: '260px',
    flexShrink: 0,
    filter: offset === 0
      ? 'drop-shadow(0 6px 20px rgba(0,0,0,0.35))'
      : 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))'
  }
}