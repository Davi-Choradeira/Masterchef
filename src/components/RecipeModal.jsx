import React from 'react'

export default function RecipeModal({ receita, aoFechar }) {
  if (!receita) return null // 👈 evita renderizar caso receita seja null

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img
          src={receita.imagem || 'https://via.placeholder.com/600x300?text=Receita'}
          alt={receita.titulo}
          style={styles.imagem}
        />
        <h2>{receita.titulo}</h2>
        <p><strong>Tempo de preparo:</strong> {receita.tempo}</p>
        <h4>Ingredientes:</h4>
        <ul>
          {receita.ingredientes.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <h4>Modo de preparo:</h4>
        <p>{receita.instrucoes}</p>
        <button style={styles.fechar} onClick={aoFechar}>Fechar</button>
      </div>
    </div>
  )
}
const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
  },
 imagem: {
  width: '100%',
  maxHeight: '250px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem'
},
  fechar: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
}