import Style from './css/Muralhas.module.css'
import ComponentProps from './ComponentProps'
import Bandeira_escocia from '../assets/imagens/Escocia.png'
function Muralhas(){
    
    return(
        <section className={Style.fundo_muralhas}>
            <h1>Venha conhecer a Muralha</h1>
             <ComponentProps 
        lugar="Muralhas "
        texto="As Muralhas encanta com suas paisagens de tirar o fôlego, repletas de montanhas, lagos e castelos antigos.
        As Terras Altas oferecem cenários naturais deslumbrantes, como o famoso Loch Ness e o Ben Nevis.
         "
         bandeira={Bandeira_escocia}/>
        </section>
    )
}

export default Muralhas