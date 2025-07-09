import React from 'react'
import { receitasMock } from '../data/receitas'
import RecipeList from '../components/RecipeList'

export default function Favorites({ favoritos = [], aoFavoritar, aoClicar }) {
  const favoritas = receitasMock.filter((r) => favoritos.includes(r.id))

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>❤️ Minhas Receitas Favoritas</h2>
      <p style={styles.contagem}>
        {favoritas.length === 0
          ? 'Você ainda não favoritou nenhuma receita.'
          : `${favoritas.length} favoritas`}
      </p>

      {favoritas.length > 0 ? (
        <RecipeList
          receitas={favoritas}
          favoritos={favoritos}
          aoFavoritar={aoFavoritar}
          aoClicar={aoClicar}
        />
      ) : (
        <div style={styles.vazio}>
          <img
            src="/imagens/favoritos-vazio.png"
            alt="Sem favoritos"
            style={styles.imagem}
          />
          <p style={styles.textoVazio}>
            Você ainda não adicionou nenhuma receita aos favoritos.
          </p>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1400px',
    padding: '2rem',
    margin: '0 auto',
    textAlign: 'center'
  },
  titulo: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  contagem: {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#666'
  },
  vazio: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imagem: {
    width: '160px',
    height: '160px',
    objectFit: 'contain',
    opacity: 0.5,
    marginBottom: '1rem'
  },
  textoVazio: {
    fontSize: '1rem',
    color: '#777'
  }
}