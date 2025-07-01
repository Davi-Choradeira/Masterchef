import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Busca Receitas 🍽️</h1>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/favoritos" style={styles.link}>Favoritos 💖</Link>
      </nav>
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
  link: {
    marginLeft: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#fff'
  }
}