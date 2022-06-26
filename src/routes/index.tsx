import styles from './Routes.module.scss'
import Search from './Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favorite from './Favorite'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='favorite' element={<Favorite />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
