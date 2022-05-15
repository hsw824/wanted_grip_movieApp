import { useState } from 'react'

import styles from './search.module.scss'
import axios from 'axios'
import { ProductProps } from '../../types/ProductList'
import { MovieList } from './MovieList'
import Footer from 'components/Footer'

const Search = () => {
  const [value, setValue] = useState<string>('')
  const [data, setData] = useState<ProductProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const MOVIE_BASE_URL = `http://www.omdbapi.com/?apikey=92e32667&s=${value}&page={페이지번호(1)}`

  const fetchData = async () => {
    const response = await axios.get(`${MOVIE_BASE_URL}`)
    setData(response.data.Search)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    fetchData()
    setLoading(false)
    setValue('')
  }
  return (
    <div className={styles.search}>
      <form>
        <input type='text' placeholder='Search for a movie' value={value} onChange={handleOnChange} />
        <button type='submit' onClick={handleOnSubmit}>
          Search
        </button>
      </form>
      {loading ? <h1>No search results found</h1> : <MovieList data={data} />}
      <Footer />
    </div>
  )
}

export default Search
