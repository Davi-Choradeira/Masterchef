import React from 'react'

const categorias = ['Doce', 'Salgado', 'Rápido', 'Vegano', 'Fitness']

export default function Filters({ aoFiltrar }) {
  return (
    <div style={styles.container}>
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => aoFiltrar(categoria)}
          style={styles.botao}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    padding: '1rem'
  },
  botao: {
    background: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
}