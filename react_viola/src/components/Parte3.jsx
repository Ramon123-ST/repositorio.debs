import React from 'react';
import styles from './Parte3.module.css';

export default function Parte3() {
  return (
   
        <section className={styles.parte3}>
          <div className={styles.mapa}>
            <img src="/img/localiza.jpg" alt="Localização da loja" className={styles.img} />
          </div>
          <div className={styles.texto}>
            <h2>Nossa Loja - Instrumentos Musicais</h2>
            <p>
              Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker,
              em uma construção do século XIX, numa área de 500m², com uma variada gama
              de instrumentos, em um ambiente agradável para toda a família!
            </p>
          </div>
        </section>
      
  );
}



