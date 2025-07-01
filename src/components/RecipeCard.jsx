import React from 'react'

export default function RecipeCard({ receita, aoClicar, aoFavoritar, isFavorita }) {
  return (
    <div style={styles.card}>
      <img src={receita.imagem} alt={receita.titulo} style={styles.imagem} onClick={() => aoClicar(receita)} />
      <div style={styles.header}>
        <h3 style={styles.titulo}>{receita.titulo}</h3>
        <span
          onClick={() => aoFavoritar(receita.id)}
          style={{
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: isFavorita ? '#e91e63' : '#ccc'
          }}
          title={isFavorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {isFavorita ? '💖' : '🤍'}
        </span>
      </div>
      <p>{receita.tempo}</p>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    maxWidth: '320px'
  },
  imagem: {
    width: '100%',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titulo: {
    margin: 0
  }
}