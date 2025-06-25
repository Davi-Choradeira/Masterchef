import React from 'react'

export default function RecipeCard({ receita, aoClicar }) {
  return (
    <div style={styles.card} onClick={() => aoClicar(receita)}>
      <h3>{receita.titulo}</h3>
      <p><strong>Tempo:</strong> {receita.tempo}</p>
      <p><strong>Ingredientes:</strong> {receita.ingredientes.join(', ')}</p>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    backgroundColor: '#fff',
    cursor: 'pointer'
  }
}