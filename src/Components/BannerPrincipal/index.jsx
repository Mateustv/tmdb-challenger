import styles from './styles.module.scss'

export function BannerPrincipal({ setTheme }) {
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
            <li> <button onClick={() => setTheme('Ação')}>Ação</button> </li>
            <li> <button onClick={() => setTheme('Aventura')}>Aventura</button> </li>
            <li> <button onClick={() => setTheme('Animação')}>Animação</button> </li>
            <li> <button onClick={() => setTheme('Comédia')}>Comédia</button> </li>
            <li> <button onClick={() => setTheme('Crime')}>Crime</button> </li>
            <li> <button onClick={() => setTheme('Documentário')}>Documentário</button> </li>
            <li> <button onClick={() => setTheme('Drama')}>Drama</button> </li>
            <li> <button onClick={() => setTheme('Família')}>Família</button> </li>
            <li> <button onClick={() => setTheme('Fantasia')}>Fantasia</button> </li>
            <li> <button onClick={() => setTheme('História')}>História</button> </li>
          </ul>
          <ul>
            <li> <button onClick={() => setTheme('Terror')}>Terror</button> </li>
            <li> <button onClick={() => setTheme('Música')}>Música</button> </li>
            <li> <button onClick={() => setTheme('Mistério')}>Mistério</button> </li>
            <li> <button onClick={() => setTheme('Romance')}>Romance</button> </li>
            <li> <button onClick={() => setTheme('Ficcção científica')}>Ficcção científica</button> </li>
            <li> <button onClick={() => setTheme('Cinema TV')}>Cinema TV</button> </li>
            <li> <button onClick={() => setTheme('Thriller')}>Thriller</button> </li>
            <li> <button onClick={() => setTheme('Guerra')}>Guerra</button> </li>
            <li> <button onClick={() => setTheme('Faroeste')}>Faroeste</button> </li>
          </ul>
        </div>
      </div>
    </section>
  )
}