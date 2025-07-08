import React from 'react'

export default function RecipeCard({ receita, aoClicar, aoFavoritar, isFavorita }) {
  if (!receita) return null

  return (
    <div style={styles.card} onClick={() => aoClicar(receita)}>
      <div style={styles.thumb}>
        <span style={styles.nome}>{receita?.titulo || 'Sem título'}</span>
      </div>

      <div style={styles.header}>
        <span style={styles.titulo}>{receita?.titulo || 'Sem título'}</span>
        <span
          onClick={(e) => {
            e.stopPropagation()
            aoFavoritar?.(receita.id)
          }}
          style={{
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: isFavorita ? '#ff4da6' : '#888',
            transition: 'color 0.3s ease'
          }}
          title={isFavorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {isFavorita ? '💖' : '🤍'}
        </span>
      </div>

      <p style={styles.tempo}>⏱️ {receita?.tempo || 'Tempo desconhecido'}</p>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#111',
    borderRadius: '12px',
    border: '1px solid #444',
    boxShadow: '0 0 10px rgba(0,255,255,0.2)',
    padding: '1rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    maxWidth: '320px', // aumentei para dar um pouco mais de espaço
    flex: '1 1 320px',
    color: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backdropFilter: 'blur(4px)'
  },
  thumb: {
    width: '100%',
    height: '180px',
    backgroundColor: '#222',
    border: '2px dashed #555',
    borderRadius: '8px',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nome: {
    color: '#0ff',
    fontSize: '1.1rem',
    textAlign: 'center',
    padding: '0 0.5rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  titulo: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#00ffff',
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  tempo: {
    marginTop: 'auto',
    fontSize: '0.9rem',
    color: '#ccc'
  }
}
