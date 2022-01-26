import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { AiFillCloseCircle } from "react-icons/ai"

import styles from './styles.module.scss'

export function BannerPrincipal({ setGenre }) {

  const { theme } = useContext(MovieContext)

  return (
    <section className={styles.container}>
      <div className={styles.bannerContent}>
        <h1>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </h1>
        <span>
          FILTRE POR:
        </span>
        <div className={styles.buttonsTheme}>
          <ul>
            {theme.map(data => {
              return (
                <li key={data.id}>
                  {data.active ?
                    <button
                      onClick={() => setGenre(data.id)}
                      className={styles.active}
                    >
                      {data.name}
                      <AiFillCloseCircle className={styles.icon} />
                    </button>
                    :
                    <button
                      onClick={() => setGenre(data.id)}
                    >
                      {data.name}
                    </button>
                  }
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}