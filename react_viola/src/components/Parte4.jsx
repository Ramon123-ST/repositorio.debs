import styles from "./Parte4.module.css";

export default function Parte4() {
  return (
     <section className={styles.funfo}>
    <section className={styles.fundo}>
    <section className={styles.parte4}>
      <div className={styles.formulario}>
        <form>
          <label>Entre com o seu nome:</label>
          <input type="text" placeholder="Digite seu nome aqui" />

          <label>Entre com o seu e-mail:</label>
          <input type="email" placeholder="Digite seu email aqui" />

          <label>Faça seu pedido por aqui:</label>
          <input id={styles.pedidos} placeholder="Escreva aqui..." />

          <button type="submit">Enviar</button>
        </form>

        <div className={styles.redes}>
          <h3>Acesse também nossas redes sociais:</h3>
          <div className={styles.icone}>
            <img src="/img/logo-whatsapp-verde-icone-ios-android-4096.png" alt="WhatsApp" />
            <img src="/img/Instagram_Logo_png.png" alt="Instagram" />
            <img src="/img/Logo-Facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>
    </section>
    </section>
    </section>
  );
}


