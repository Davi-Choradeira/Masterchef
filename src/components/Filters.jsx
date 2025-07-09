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
    padding: '1rem',
    justifyContent: 'center'
  },
  botao: {
    backgroundColor: '#20232a',
    color: '#fff',
    border: '1px solid #333',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background 0.3s, transform 0.2s'
  }
}