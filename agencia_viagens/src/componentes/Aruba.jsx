import Style from './css/Aruba.module.css'
import ComponentProps from './ComponentProps'
import Bandeira_escocia from '../assets/imagens/Escocia.png'
function Aruba(){
    return(
        <section className={Style.fundo_aruba}>
            <h1>Venha conhecer Aruba</h1>
        <ComponentProps 
        lugar="Aruba"
        texto="Aruba encanta com suas paisagens de tirar o fôlego, repletas de montanhas, lagos e castelos antigos.
        As Terras Altas oferecem cenários naturais deslumbrantes, como o famoso Loch Ness e o Ben Nevis.
         "
         bandeira={Bandeira_escocia}/>

        </section>
    )
}

export default Aruba