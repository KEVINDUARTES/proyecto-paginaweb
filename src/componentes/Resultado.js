import React, {Component} from "react";
import Imagen from "./imagen";
import Paginacion from "./Paginacion";

class Resultado extends Component {
   mostrarImagenes = () => { //este metodo mustra imagenes
         
     const imagenes = this.props.imagenes;
     if(imagenes.length === 0) return null; //le doy una validacion

     //console.log(imagenes)

     return (
         <React.Fragment>
            <div className="col-12 p-5 row">
                        {imagenes.map(imagen => (
                            <Imagen
                                   key={imagen.id}
                                   imagen={imagen}

                            />
                        ))}
            </div>
            <Paginacion
             paginaAnterior={this.props.paginaAnterior}
             paginaSiguiente={this.props.paginaSiguiente}
             />
         </React.Fragment>
     )
   }  
    render() {
        return ( //                         el this llama mostrar imagenes
            <React.Fragment>
                { this.mostrarImagenes() } 
            </React.Fragment>
        );
    }
}

export default Resultado;