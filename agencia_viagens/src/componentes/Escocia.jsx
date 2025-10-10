import Style from './css/Escocia.module.css'
import ComponentProps from './ComponentProps'
import Bandeira_escocia from '../assets/imagens/Escocia.png'

function Escocia(){
    return(
        <section className={Style.fundo_escocia}>
            <h1>Venha conhecer a Escocia</h1>
          <ComponentProps 
                lugar="Escocia"
                texto="A Escócia encanta com suas paisagens de tirar o fôlego, repletas de montanhas, lagos e castelos antigos.
As Terras Altas oferecem cenários naturais deslumbrantes, como o famoso Loch Ness e o Ben Nevis.
 "
 bandeira={Bandeira_escocia}/>
        </section>
    )
}

export default Escocia