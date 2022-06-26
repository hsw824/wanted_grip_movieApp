import { useState, MouseEvent } from 'react'
import { ProductProps } from '../../../types/ProductList'
import useLocalStorageState from 'use-local-storage-state'
import noPoster from '../../../assets/noImage.jpeg'
import Modal from 'components/Modal'

import styles from './movieList.module.scss'

const MovieList = ({ data }: { data: ProductProps[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [listId, setListId] = useState(0)

  const [favoriteMovie, setFavoriteMovie] = useLocalStorageState<ProductProps[]>('favorite', {
    ssr: true,
    defaultValue: [],
  })
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    toggleIsOpen()
    setListId(event.currentTarget.tabIndex)
  }

  const handleAddFavorite = () => {
    setFavoriteMovie((prev) => [data[listId], ...prev])
    setIsOpen((prev) => !prev)
  }

  const handleRemoveFavorite = () => {
    const movieFilter = favoriteMovie.filter((movie) => movie.imdbID !== data[listId].imdbID)
    setFavoriteMovie(() => [...movieFilter])
    setIsOpen((prev) => !prev)
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
          </div>
        </div>
      ))}
      {isOpen ? (
        <Modal
          poster={data[listId].Poster}
          title={data[listId].Title}
          imdbID={data[listId].imdbID}
          toggleIsOpen={toggleIsOpen}
          handleAddFavorite={handleAddFavorite}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      ) : null}
    </div>
  )
}

export { MovieList }
