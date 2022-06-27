import React, { Component } from 'react';  //este va a ser el componente principal
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {
 
   state ={
    termino : " ",
    imagenes : [], //para reutilizar un componente
    pagina: " "
   }

   scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
   }

   paginaAnterior = () => {
    console.log('anterior...');

      //leer el state de la pagina actual
      let pagina = this.state.pagina;

       //leer si la pagina es 1, ya no ir hacia atras 
       if(pagina === 1) return null;

    //resto uno a la pagina actual
        pagina -= 1; 
    //agregar el cambio al state
      this.setState({
        pagina
      }, () =>{
        this.consultarApi();
        this.scroll();
      })

   // console.log(pagina);
   }
   paginaSiguiente = () => {
    //leer el state de la pagina actual
      let pagina = this.state.pagina;
    //sumar uno a la pagina actual
        pagina += 1; 
    //agregar el cambio al state
      this.setState({
        pagina
      }, () =>{
        this.consultarApi();
        this.scroll();
      })

    //console.log(pagina);
   }

   consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=28291066-7d2b61c16d28df33650c4f9c2&q=${termino}&per_page=30&page=${pagina}`;;
     console.log(process.env.CLAVE)

    fetch(url)
     .then(respuesta => respuesta.json())
     .then(resultado => this.setState({ imagenes : resultado.hits}) )
   }

    datosBusqueda = (termino) => { //despeus de setear implemento un callback para llamar el termino
      this.setState({
        termino : termino,
        pagina: 1
      }, () =>{
        this.consultarApi();
      })
    }
 
  render () {
    return (
      <div className="app container">
        <div className='jumbotron'> 
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador //como props de buscador le paso a app mensaje
           datosBusqueda={this.datosBusqueda} />

        </div>
        {this.state.termino}
       <div className='row justify-content-center'>
        <Resultado 
           imagenes={this.state.imagenes} 
           paginaAnterior={this.paginaAnterior}
           paginaSiguiente={this.paginaSiguiente}
           />
       </div>
      </div>
    );
  }
}

export default App; //exporto al index para que lo muestre 
