import React, { useState, useCallback, useMemo } from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeCarousel3D({ receitas, aoClicar, aoFavoritar, favoritos }) {
  const [angulo, setAngulo] = useState(0)
  const total = receitas.length

  const anguloPorCard = useMemo(() => 360 / total, [total])

  const rotate = useCallback(
    (direction) => {
      setAngulo((prev) => {
        let novoAngulo = prev + (direction === 'left' ? anguloPorCard : -anguloPorCard)
        if (novoAngulo >= 360) novoAngulo -= 360
        if (novoAngulo < 0) novoAngulo += 360
        return novoAngulo
      })
    },
    [anguloPorCard]
  )

  return (
    <div style={styles.wrapper}>
      <div style={styles.anel}>
        <div
          style={{
            ...styles.circulo,
            transform: `translateZ(-550px) rotateY(${angulo}deg)` // aqui o translateZ negativo maior
          }}
        >
          {receitas.map((receita, i) => {
            const rotY = i * anguloPorCard
            return (
              <div
                key={receita.id}
                style={{
                  ...styles.card,
                  transform: `rotateY(${rotY}deg) translateZ(550px)` // distância maior para espaçar cards
                }}
              >
                <RecipeCard
                  receita={receita}
                  aoClicar={aoClicar}
                  aoFavoritar={aoFavoritar}
                  isFavorita={favoritos.includes(receita.id)}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div style={styles.controles}>
        <button
          style={styles.btn}
          onClick={() => rotate('left')}
          aria-label="Girar para esquerda"
          type="button"
        >
          ⬅️
        </button>
        <button
          style={styles.btn}
          onClick={() => rotate('right')}
          aria-label="Girar para direita"
          type="button"
        >
          ➡️
        </button>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    perspective: '1400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '3rem 0'
  },
  anel: {
    width: '100%',
    height: '520px',
    position: 'relative'
  },
  circulo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transformStyle: 'preserve-3d',
    transition: 'transform 1s ease'
  },
  card: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-160px',
    marginTop: '-200px',
    transformStyle: 'preserve-3d',
    transformOrigin: 'center center',
    transition: 'transform 0.6s ease'
  },
  controles: {
    marginTop: '1.5rem',
    display: 'flex',
    gap: '1rem'
  },
  btn: {
    fontSize: '1.6rem',
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    backgroundColor: '#f06060',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    transition: 'background-color 0.3s ease',
    userSelect: 'none'
  }
}
