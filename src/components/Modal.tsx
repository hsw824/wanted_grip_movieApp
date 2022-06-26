import ReactDOM from 'react-dom'
import { ProductProps } from 'types/ProductList'
import useLocalStorageState from 'use-local-storage-state'

import styles from './modal.module.scss'

interface Props {
  poster: string
  title: string
  imdbID: string
  toggleIsOpen: () => void
  handleAddFavorite: () => void
  handleRemoveFavorite: () => void
}

const Modal = ({ poster, title, imdbID, toggleIsOpen, handleAddFavorite, handleRemoveFavorite }: Props) => {
  const [favoriteMovie] = useLocalStorageState<ProductProps[]>('favorite', {
    ssr: true,
    defaultValue: [],
  })

  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalBody}>
        <img src={poster} alt='poster' />
        <h2>{title}</h2>
        <p>Add Movies to Favorites? </p>
        <div className={styles.buttonBox}>
          {favoriteMovie.find((movie) => movie.imdbID === imdbID) ? (
            <button onClick={handleRemoveFavorite} type='button'>
              Remove
            </button>
          ) : (
            <button onClick={handleAddFavorite} type='button'>
              Add Favorite
            </button>
          )}

          <button onClick={toggleIsOpen} type='button'>
            Cancle
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  )
}

export default Modal
