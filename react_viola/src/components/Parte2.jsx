import styles from "./Parte2.module.css";

export default function Parte2() {
  const produtos = [
    { img: "/img/violao.png", nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", preco: "R$ 989,50" },
    { img: "/img/violao.png", nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", preco: "R$ 989,50" },
    { img: "/img/violao.png", nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", preco: "R$ 989,50" },
    { img: "/img/violao.png", nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", preco: "R$ 989,50" },
  ];

  return (
    <section id={styles.parte2}>
      <div className={styles.produtos}>
        {produtos.map((p, i) => (
          <div className={styles.item} key={i}>
            <img src={p.img} alt={p.nome} />
            <p>{p.nome}</p>
            <span>{p.preco}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


