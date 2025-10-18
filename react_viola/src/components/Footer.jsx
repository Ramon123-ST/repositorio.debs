
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Nossa Loja - Instrumentos Musicais<br />
        Rua Tito, 54 - Lapa<br />
        São Paulo - Brasil
      </p>
      <div>
        <img src="/img/logo-whatsapp-verde-icone-ios-android-4096.png" alt="WhatsApp" />
        <img src="/img/Instagram_Logo_png.png" alt="Instagram" />
        <img src="/img/Logo-Facebook.png" alt="Facebook" />
      </div>
    </footer>
  );
}

