import { useState, MouseEvent } from 'react'
import { ProductProps } from '../../../types/ProductList'
import useLocalStorageState from 'use-local-storage-state'
import noPoster from '../../../assets/noImage.jpeg'

import styles from './movieList.module.scss'

const MovieList = ({ data }: { data: ProductProps[] }) => {
  // const [isActive, setIsActive] = useState(false)
  const [listId, setListId] = useState(0)

  const [favoriteMovie, setFavoriteMovie] = useLocalStorageState<ProductProps[]>('favorite', {
    ssr: true,
    defaultValue: [],
  })

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    // setIsActive((prev) => !prev)
    setListId(event.currentTarget.tabIndex)
  }

  const handleAddFavorite = () => {
    setFavoriteMovie((prev) => [data[listId], ...prev])
    // setIsActive((prev) => !prev)
  }

  const handleRemoveFavorite = () => {
    const movieFilter = favoriteMovie.filter((movie) => movie.imdbID !== data[listId].imdbID)
    setFavoriteMovie(() => [...movieFilter])
    // setIsActive((prev) => !prev)
  }

  if (!data) {
    return <h1>No search results found</h1>
  }
  return (
    <div className={styles.movieList}>
      {data.map((item, index) => (
        <div
          key={`movie-key-${item.imdbID}`}
          className={styles.movieCard}
          onClick={handleOnClick}
          role='button'
          tabIndex={index}
        >
          <div>
            <img className={styles.poster} src={item.Poster !== 'N/A' ? item.Poster : noPoster} alt='movie poster' />
          </div>
          <div className={styles.infoBox}>
            <p className={styles.title}>{item.Title}</p>
            <p className={styles.year}>{item.Year}</p>
            <p className={styles.type}>{item.Type}</p>
          </div>
          <div>
            {favoriteMovie.find((movie) => movie.imdbID === item.imdbID) ? (
              <p className={styles.sticker}>😊</p>
            ) : (
              <p className={styles.sticker}>😗</p>
            )}

            {/* {favoriteMovie.find((movie) => movie.imdbID === item.imdbID) ? (
              <button onClick={handleRemoveFavorite} type='button'>
                제거하기
              </button>
            ) : (
              <button onClick={handleAddFavorite} type='button'>
                즐겨찾기
              </button>
            )}

            <button onClick={handleOnClick} type='button'>
              취소하기
            </button> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export { MovieList }
