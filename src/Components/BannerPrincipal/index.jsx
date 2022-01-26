import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

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
                <li key={data.id}> <button>{data.name}</button> </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}