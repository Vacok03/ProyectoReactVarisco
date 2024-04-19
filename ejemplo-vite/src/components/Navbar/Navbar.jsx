import styles from './Navbar.module.css' 
import canosur from '../../assets/canosur.png'
import CardWidget from '../CardWidget/CardWidget.jsx'
const Navbar = () => {

        return (
        <>
        <header className={styles.header}>
        <img src={canosur} alt="" className={styles.navbarlogo}/>  
        <nav className={styles.background}>
        
        <ul>
          <li>Categoria 1</li>
          <li>Categoria 2</li>
          <li>Categoria 3</li>
        </ul>
        
      </nav>
      <CardWidget/> 
      </header>
      </> 
    )
}

export default Navbar;