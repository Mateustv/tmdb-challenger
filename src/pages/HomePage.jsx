import { useContext } from 'react';
import { BannerPrincipal } from '../Components/BannerPrincipal';
import { Header } from '../Components/Header'
import { Pagination } from '../Components/Pagination';
import { MovieContext } from '../context/MovieContext';

import styles from './homePage.module.scss'

export default function HomePage() {

  const { movies, totalPage, handlePageChange, page } = useContext(MovieContext)

  return (
    <>
      <Header />
      <BannerPrincipal setGenre={handlePageChange} />
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
