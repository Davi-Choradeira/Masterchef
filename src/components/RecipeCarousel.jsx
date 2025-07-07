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
    perspective: '1500px',
    overflowX: 'auto',
    padding: '1.5rem 0',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch'
  },
  scrollArea: {
    display: 'flex',
    gap: '2.5rem',
    padding: '0 2rem',
    scrollSnapType: 'x mandatory',
    overflowX: 'scroll'
  }
}

const cardStyle = (index, total) => {
  const center = Math.floor(total / 2)
  const distanceFromCenter = Math.abs(index - center)
  const scale = 1 - distanceFromCenter * 0.06
  const rotateY = (index - center) * 5

  return {
    scrollSnapAlign: 'center',
    transform: `rotateY(${rotateY}deg) scale(${scale})`,
    transition: 'transform 0.6s ease, filter 0.4s ease',
    minWidth: '260px',
    flexShrink: 0,
    filter: distanceFromCenter === 0
      ? 'drop-shadow(0 6px 18px rgba(0,0,0,0.25))'
      : 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))'
  }
}