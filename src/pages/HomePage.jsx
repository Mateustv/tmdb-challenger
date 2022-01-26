import { useContext } from 'react';
import { BannerPrincipal } from '../Components/BannerPrincipal';
import { Header } from '../Components/Header'
import { Pagination } from '../Components/Pagination';
import { MovieContext } from '../context/MovieContext';

import styles from './homePage.module.scss'

export default function HomePage() {

  const { movies, totalPage, handlePageChange, page, handleSetGenre, theme, handleSetMovies } = useContext(MovieContext)

  function handleFilter(numberId) {
    const activeFilter = theme.map(elemento => {
      if (elemento.id === numberId) {
        elemento.active = elemento.active ? false : true
      }
      return elemento
    })
    handleSetGenre(activeFilter)
    setMoviesFilter()
  }

  function setMoviesFilter() {
    const activeFilter = theme.filter(elemento => elemento.active)
    let listProvisional = []

    if (activeFilter.length > 0) {
      for (const filter of activeFilter) {
        const arrayMovieFilter = movies.filter(movie => movie.genre_ids.find(el => el === filter.id))

        listProvisional = arrayMovieFilter.map(movie => {
          return movie
        })
      }
      listProvisional.sort(function (a, b) {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }

        return 0;
      })
    } else {
      listProvisional = movies
    }
    handleSetMovies(listProvisional)
  }

  return (
    <>
      <Header />
      <BannerPrincipal setGenre={handleFilter} />
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
      </section>
      <Pagination
        lastPage={totalPage}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </>
  );
}
