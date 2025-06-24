import React from 'react'

export default function RecipeCard({ receita }) {
  return (
    <div style={styles.card}>
      <h3>{receita.titulo}</h3>
      <p>Tempo: {receita.tempo}</p>
      <p>Ingredientes: {receita.ingredientes.join(', ')}</p>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    backgroundColor: '#fff'
  }
}