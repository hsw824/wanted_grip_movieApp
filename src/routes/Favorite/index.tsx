import Footer from 'components/Footer'
import { MovieList } from 'routes/Search/MovieList'
import useLocalStorageState from 'use-local-storage-state'
import styles from './favorite.module.scss'

const Favorite = () => {
  const [favoriteMovie] = useLocalStorageState('favorite', {
    ssr: true,
    defaultValue: [],
  })

  return (
    <div className={styles.favorite}>
      <h1>Favorite Movies</h1>
      <MovieList data={favoriteMovie} />
      <Footer />
    </div>
  )
}

export default Favorite
