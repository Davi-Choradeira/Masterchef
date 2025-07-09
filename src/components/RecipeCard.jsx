import React, { useState } from 'react'

export default function RecipeCard({ receita, aoClicar, aoFavoritar, isFavorita }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      style={{
        ...styles.card,
        transform: hover ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 0 14px rgba(0, 150, 255, 0.2)'
          : '0 1px 6px rgba(0,0,0,0.1)'
      }}
      onClick={() => aoClicar(receita)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={receita.imagem || '/imagens/default.jpg'}
        alt={receita.titulo}
        style={styles.imagem}
      />
      <h3 style={styles.titulo}>{receita.titulo}</h3>
      <p style={styles.tempo}>⏱️ {receita.tempo}</p>
      <ul style={styles.lista}>
        {receita.ingredientes.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <button
        onClick={(e) => {
          e.stopPropagation()
          aoFavoritar(receita.id)
        }}
        style={{
          ...styles.botaoFavorito,
          backgroundColor: isFavorita ? '#ff4081' : '#e0e0e0',
          color: isFavorita ? '#fff' : '#333'
        }}
      >
        {isFavorita ? 'Remover dos favoritos' : 'Favoritar'}
      </button>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1rem',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    height: '100%'
  },
  imagem: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '0.5rem'
  },
  titulo: {
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: '0.5rem 0 0.2rem'
  },
  tempo: {
    fontSize: '0.95rem',
    color: '#666',
    marginBottom: '0.5rem'
  },
  lista: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '0.5rem',
    fontSize: '0.85rem',
    color: '#444'
  },
  botaoFavorito: {
    border: 'none',
    padding: '0.4rem 0.8rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    cursor: 'pointer'
  }
}