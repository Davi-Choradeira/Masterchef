import React, { useState } from 'react'

export default function SearchBar({ aoBuscar }) {
  const [ingrediente, setIngrediente] = useState('')

  const handleSearch = () => {
    if (ingrediente.trim()) {
      aoBuscar(ingrediente)
      setIngrediente('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Digite um ingrediente..."
        value={ingrediente}
        onChange={(e) => setIngrediente(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Buscar
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    gap: '0.5rem',
    padding: '1rem'
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '1rem'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
}