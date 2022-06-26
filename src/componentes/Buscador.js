import React, {Component } from 'react';

class Buscador extends Component {

            busquedaRef = React.createRef();  //nos permite leer los valores de los input. accedemos a lo que el usuario escribe
            obtenerDatos = (e) =>{
                e.preventDefault();

                const termino = this.busquedaRef.current.value;//tomamos el valor del input

                this.props.datosBusqueda(termino);
            }

    render() {
        return (  // cuando ejecutemos onSubmit ejecuta el metodo de arriba
            < form  onSubmit={this.obtenerDatos}>
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input ref={this.busquedaRef} type= "text" className='form-control
                    form-control-lg'  placeholder='Busca tu Imagen.
                    Ejemplo: cafe'></input>
                </div>

                <div className='form-group col-md-4'>
                    <input type= "submit" className='btn btn-lg btn-danger btn-block'
                      value='Buscar...'></input>
                </div>

            </div>
            </form>
        );
    }
}

export default Buscador;