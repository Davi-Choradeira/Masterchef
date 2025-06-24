import React from 'react'

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>🍲 Busca Receitas</h1>
      <button style={styles.button}>Favoritos</button>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f44336',
    color: '#fff'
  },
  title: {
    margin: 0,
    fontSize: '1.5rem'
  },
  button: {
    background: '#fff',
    color: '#f44336',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}