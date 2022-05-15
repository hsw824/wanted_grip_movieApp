import { NavLink } from 'react-router-dom'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <ul className={styles.menuContainer}>
      <NavLink to='/'>검색하기</NavLink>
      <NavLink to='/favorite'>즐겨찾기</NavLink>
    </ul>
  )
}

export default Footer
