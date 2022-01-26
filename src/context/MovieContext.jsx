import { createContext, useState, useEffect } from "react";
import { api } from "../utils/api";

export const MovieContext = createContext({})

export function MovieProvider({ children }) {

  const [totalPage, setTotalPage] = useState()
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])

  function handlePageChange(number) {
    setPage(number)
  }

  useEffect(async () => {
    const { data } = await api.get(`/movie/popular`, {
      params: {
        api_key: '1b62339a09333a86b64565261d79c698',
        language: 'pt-BR',
        page,
      }
    })
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
    setTotalPage(500)
    setMovies(results)
  }, [page])

  const [theme, setTheme] = useState([])

  function handleSetTheme(genres) {
    setTheme(genres)
  }

  useEffect(async () => {
    const { data } = await api.get(`/genre/movie/list`, {
      params: {
        api_key: '1b62339a09333a86b64565261d79c698',
        language: 'pt-BR',
      }
    })

    const themesReq = data.genres.map(genre => {
      return {
        id: genre.id,
        name: genre.name,
      }
    })

    setTheme(themesReq)
  }, [])

  return (
    <MovieContext.Provider
      value={{
        movies,
        totalPage,
        handlePageChange,
        page,
        theme,
        handleSetTheme
      }}>
      {children}
    </MovieContext.Provider>
  )


}