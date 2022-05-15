import { useState } from 'react'
import { ProductProps } from '../../../types/ProductList'
import styles from './movieList.module.scss'
import classNames from 'classnames'
import useLocalStorageState from 'use-local-storage-state'
import noPoster from '../../../assets/noImage.jpeg'

const MovieList = ({ data }: { data: ProductProps[] }) => {
  const [isActive, setIsActive] = useState(false)
  const [listId, setListId] = useState(0)

  const [favoriteMovie, setFavoriteMovie] = useLocalStorageState<ProductProps[]>('favorite', {
    ssr: true,
    defaultValue: [],
  })

  const handleOnClick = (e: any) => {
    setIsActive((prev) => !prev)
    setListId(e.currentTarget.tabIndex)
  }

  const handleAddFavorite = () => {
    setFavoriteMovie((prev) => [...prev, data[listId]])
    setIsActive((prev) => !prev)
  }

  const handleRemoveFavorite = (e: any) => {
    const movieFilter = favoriteMovie.filter((movie) => movie.imdbID !== data[listId].imdbID)
    setFavoriteMovie(() => [...movieFilter])
    setIsActive((prev) => !prev)
  }

  if (!data) {
    return <h1>No search results found</h1>
  }
  return (
    <div className={styles.movieList}>
      <ul>
        {data.map((item, index) => (
          <div key={`movie-key-${item.imdbID}`}>
            <div
              className={classNames(styles.movieCard, { [styles.move]: isActive && listId === index })}
              onClick={handleOnClick}
              role='button'
              tabIndex={index}
            >
              <li className={styles.poster}>
                <img src={item.Poster !== 'N/A' ? item.Poster : noPoster} alt='movie poster' />
              </li>
              <li className={styles.title}>{item.Title}</li>
              <li className={styles.year}>{item.Year}</li>
              <li className={styles.type}>{item.Type}</li>
              {favoriteMovie.find((movie) => movie.imdbID === item.imdbID) ? (
                <li className={styles.sticker}>😊</li>
              ) : (
                <li className={styles.sticker}>😗</li>
              )}
            </div>
            <div className={classNames(styles.silde, { [styles.active]: isActive && listId === index })}>
              {favoriteMovie.find((movie) => movie.imdbID === item.imdbID) ? (
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
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export { MovieList }
