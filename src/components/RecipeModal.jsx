import React from 'react'

export default function RecipeModal({ receita, aoFechar }) {
  return (
    <div style={styles.overlay} onClick={aoFechar}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={aoFechar}>✖</button>
        <img src={receita.imagem} alt={receita.nome} style={styles.image} />
        <h2>{receita.nome}</h2>
        <p><strong>Tempo de preparo:</strong> {receita.tempo}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          {receita.ingredientes.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
        <p><strong>Modo de preparo:</strong></p>
        <p>{receita.preparo}</p>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    border: 'none',
    background: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}
