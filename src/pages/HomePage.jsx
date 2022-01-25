import { useEffect, useState } from 'react';
import { BannerPrincipal } from '../Components/BannerPrincipal';
import { Header } from '../Components/Header'
import { api } from '../utils/api';

import styles from './homePage.module.scss'

export default function HomePage() {
  const [theme, setTheme] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(async () => {
    const { data } = await api.get('/movie/popular?api_key=1b62339a09333a86b64565261d79c698')
    const results = data.results.map(result => {
      return {
        id: result.id,
        genre_ids: result.genre_ids,
        original_title: result.original_title,
        poster_path: result.poster_path,
        release_date: result.release_date,
        title: result.title,
      }
    })

    setMovies(results)
    console.log(results, data)
  }, [])

  return (
    <>
      <Header />
      <BannerPrincipal setTheme={setTheme} />
      <section className={styles.containerImages}>
        <div className={styles.listImages}>
          <ul>
            {movies.map(data => (
              <li key={data.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
                <p>{data.title}</p>
                <span>{data.release_date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.paginationNumbers}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>{'>'}</li>
            <li>Ultima</li>
          </ul>
        </div>
      </section>
    </>
  );
}
