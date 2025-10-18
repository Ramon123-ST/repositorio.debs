
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <section>
      <div className={styles.topo}>
        <img src="/img/primeiro_vio.png" alt="Imagem topo da loja" />
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quem Somos</a></li>
            <li><a href="#">Instrumentos</a></li>
            <li><a href="#">Endereço</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}







