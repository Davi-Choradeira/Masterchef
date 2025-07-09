import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Busca Receitas</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Início</Link>
        <Link to="/favoritos" style={styles.link}>Favoritos</Link>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#20232a',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  title: {
    margin: 0,
    fontSize: '1.6rem',
    fontWeight: '600'
  },
  nav: {
    display: 'flex',
    gap: '1rem'
  },
  link: {
    color: '#fff',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '0.25rem 0.5rem'
  }
}