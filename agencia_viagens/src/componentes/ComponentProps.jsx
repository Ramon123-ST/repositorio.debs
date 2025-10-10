import Style from './css/ComponenteProps.module.css'

function ComponentProps({lugar,texto,bandeira}){
    return(
        
        <div className={Style.corpo_texto}>
            <h2> venha conhecer esse lugar incrive {lugar} l!!  </h2>
                <p>
                    {texto}
                </p>
          
        <img src={bandeira} alt="Logo da firma" className={Style.imagem_props}/>
        </div>

    )
}
export default ComponentProps