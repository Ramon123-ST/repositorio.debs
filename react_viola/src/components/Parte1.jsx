
import styles from "./Parte1.module.css";

export default function Parte1() {
  return (
    <section id={styles.parte1}>
      <div className={styles.conteudo}>
        <div className={styles.texto}>
          <h2>Nossa Loja - Instrumentos Musicais</h2>
          <p>
            Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo!
            Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra,
            violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado!
          </p>
        </div>
        <div className={styles.loja}>
          <img src="/img/loja.jpg" alt="Loja de instrumentos" />
        </div>
      </div>
    </section>
  );
}



