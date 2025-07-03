import React, { useState } from 'react'

export default function RecipeCarousel({ receitas }) {
  const [indiceAtual, setIndiceAtual] = useState(0)

  const receita = receitas[indiceAtual]

  const irParaAnterior = () => {
    setIndiceAtual((prev) =>
      prev === 0 ? receitas.length - 1 : prev - 1
    )
  }

  const irParaProxima = () => {
    setIndiceAtual((prev) =>
      prev === receitas.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div style={styles.container}>
      <button onClick={irParaAnterior} style={styles.seta}>❮</button>

      <div style={styles.cardWrapper}>
        <div key={receita.id} style={styles.card}>
          <img src={receita.imagem} alt={receita.titulo} style={styles.imagem} />
          <h2 style={styles.titulo}>{receita.titulo}</h2>
          <p><strong>Tempo:</strong> {receita.tempo}</p>
          <p><strong>Ingredientes:</strong> {receita.ingredientes.join(', ')}</p>
        </div>
      </div>

      <button onClick={irParaProxima} style={styles.seta}>❯</button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    padding: '2rem',
    position: 'relative',
    flexWrap: 'wrap'
  },
  seta: {
    background: 'rgba(255,255,255,0.5)',
    border: 'none',
    borderRadius: '50%',
    fontSize: '2.5rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    color: '#f44336',
    transition: 'background 0.3s ease',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    userSelect: 'none'
  },
  cardWrapper: {
    width: '360px',
    maxWidth: '90vw',
    overflow: 'hidden',
    transition: 'transform 0.4s ease-in-out',
    transform: 'scale(1)',
    backgroundColor: 'transparent'
  },
  card: {
    border: '2px solid #f44336',
    borderRadius: '12px',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'opacity 0.3s ease-in-out'
  },
  imagem: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '0.5rem'
  },
  titulo: {
    margin: '0.5rem 0',
    fontSize: '1.4rem',
    color: '#333'
  }
}