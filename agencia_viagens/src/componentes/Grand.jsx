import Style from './css/Grand.module.css'
import ComponentProps from './ComponentProps'
import Bandeira_escocia from '../assets/imagens/Escocia.png'
function Grand(){
    return(
        <section className={Style.fundo_grand}>
            <h1>Venha conhecer o Grand canyon</h1>
           <ComponentProps 
        lugar="Grand Canyou"
        texto="O Grand Canyou encanta com suas paisagens de tirar o fôlego, repletas de montanhas, lagos e castelos antigos.
        As Terras Altas oferecem cenários naturais deslumbrantes, como o famoso Loch Ness e o Ben Nevis.
         "
         bandeira={Bandeira_escocia}/>
        </section>

    )
}

export default Grand