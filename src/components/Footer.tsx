import { NavLink } from 'react-router-dom'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <ul className={styles.menuContainer}>
      <NavLink to='/'>Search</NavLink>
      <NavLink to='/favorite'>Favorite</NavLink>
    </ul>
  )
}

export default Footer
