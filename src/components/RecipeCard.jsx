import React from 'react'

export default function RecipeCard({ receita, aoClicar, aoFavoritar, isFavorita }) {
  if (!receita) return null

  return (
    <div style={styles.card} onClick={() => aoClicar(receita)}>
      <img
        src={receita?.imagem || 'https://via.placeholder.com/300x200?text=Receita'}
        alt={receita?.titulo || 'Receita'}
        style={styles.imagem}
      />

      <div style={styles.header}>
        <h3 style={styles.titulo}>{receita?.titulo || 'Sem título'}</h3>
        <span
          onClick={(e) => {
            e.stopPropagation()
            aoFavoritar?.(receita.id)
          }}
          style={{
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: isFavorita ? '#e91e63' : '#ccc',
            transition: 'color 0.3s ease'
          }}
          title={isFavorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {isFavorita ? '💖' : '🤍'}
        </span>
      </div>

      <p style={{ marginTop: '0.5rem', color: '#555' }}>
        <strong>Tempo:</strong> {receita?.tempo || '---'}
      </p>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    maxWidth: '320px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  imagem: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '0.5rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titulo: {
    margin: 0,
    fontSize: '1.1rem',
    color: '#333'
  }
}