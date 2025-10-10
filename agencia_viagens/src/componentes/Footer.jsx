import Styles from './css/Footer.module.css'
import Insta from '../assets/imagens/insta.jfif'
import Face from '../assets/imagens/face.jfif'
import Whtas from '../assets/imagens/whtas.png'
import Tiktok from '../assets/imagens/tiktok.png'

function Footer() {
  return (
    <footer className={Styles.fundo_footer}>
      <p>Siga-nos em nossas redes sociais</p>
      
      <div className={Styles.redes}>
        <img src={Insta} alt="Instagram" className={Styles.insta} />
        <img src={Face} alt="Facebook" className={Styles.face} />
        <img src={Tiktok} alt="TikTok" className={Styles.tiktok} />
        <img src={Whtas} alt="WhatsApp" className={Styles.whtas} />
      </div>

      <p>Telefone de contato: (11) 9555 - 3355</p>
    </footer>
  )
}

export default Footer
