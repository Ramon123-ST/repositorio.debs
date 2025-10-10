import {Link} from 'react-router-dom'
import Styles from './css/Header.module.css'
import Logo from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/lupa.png'


function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo" className={Styles.img_viagens} />
            <nav className={Styles.menu_header}>
              <Link to='/'>Home</Link>
               <Link to='/Escocia'>Escócia</Link>
               <Link to='/Grand'>Grand Canyon</Link>
               <Link to='/Muralhas'>Muralhas</Link>
                <Link to='/Aruba'>Aruba</Link>
            </nav>

        <div className={Styles.busca}>
            <input type="search" />

        
        </div>
        <img src={Lupa} alt="Lupinha" className={Styles.lupa} />
        </header>
    )
}

export default Header