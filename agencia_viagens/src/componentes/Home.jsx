import Styles from './css/Home.module.css'
import Mala from "../assets/imagens/mala.jpg"


function Home(){
    return(
        <section className= {Styles.fundo_home}>
            <img src={Mala} alt="Mala" className={Styles.mala_home} />
            <div className={Styles.texto_home}>
            <h1>
               Encontre aqui a viagem do seus sonhos !!
            </h1>
       
            <p>
                Transforme seus sonhos em realidade! Explore destinos paradisíacos, conheça novas culturas e crie memórias inesquecíveis. Nossa plataforma oferece as melhores opções de pacotes turísticos, com preços acessíveis e atendimento personalizado para tornar sua viagem perfeita do início ao fim.
            </p>
            </div>
        </section>
    )
}

export default Home