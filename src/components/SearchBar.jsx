import React, { useState } from 'react'

export default function SearchBar({ aoBuscar }) {
  const [texto, setTexto] = useState('')

  const buscar = () => {
    aoBuscar(texto)
  }

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Buscar ingrediente..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={styles.input}
      />
      <button onClick={buscar} style={styles.button}>Buscar</button>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  input: {
    flex: 1,
    padding: '0.6rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#333'
  },
  button: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#20232a', // cor do header
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
}