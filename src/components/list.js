import React from 'react';
import '../App.js';
import './list.css';
import '../index.js';
import './bootstrap/dist/css/bootstrap.css'; 
import './buscador.css';
import Buscador from './buscador.js';
import './catalogo.css';
import Tarjeta from"./Tarjeta.js";
import "./Tarjeta.css";


class List extends React.Component {
 constructor (props) {
   super(props);
   var myAnimalCards = this.props.Animals
.filter(item => this.props.filterFavorites === null || item.isFavorite === true)
.filter(item => this.props.filtroSexoChange === null || item.Sexo === this.props.filtroSexoChange)
.filter(item => this.props.handleCategoríaChange === null || item.Categoria === this.props.filterCategoria)
.filter(item => this.props.filterFechadenacimiento === null || item.Fechadenacimiento === this.props.filterFechadenacimiento)
.filter(item => this.props.filterRaza === null || item.raza === this.props.filterRaza)
.filter(item => this.props.filterBarrio === null || item.Barrio === this.props.filterBarrio)
   
 }
 filtroCategoríaChange = (event) => {
  this.setState({ Categoría: event.target.value });
}
filtroSexoChange = (event) => {
  this.setState({ Sexo: event.target.value });
}
filtroFechadenacimientoChange = (event) => {
  this.setState({ Fechadenacimiento: event.target.value });
}
filtroRazaChange = (event) => {
  this.setState({ Raza: event.target.value });
}
filtroBarrioChange = (event) => {
  this.setState({ Barrio: event.target.value });
}
handleBuscar= (event) => {event.preventDefault();
this.setState({ 
Categoría:this.state.Categoría,
Sexo:this.state.Sexo,
Fechadenacimiento:this.state.Fechadenacimiento,
Raza:this.state.Raza,
Barrio:this.state.Barrio,
});
};


      render() { 
       

      
        return (


         
         <div className="container" id="buscadorycatalogo" >
         <div className="row">             
         
         <div className="col-3">
         < Buscador  
      
      onHandleBuscar={this.props.onHandleBuscar}
        Animals={this.props.Animals}
        
   Categoría={this.props.Animals.Categoría}
   Sexo={this.props.Animals.Sexo}
   Fechadenacimiento={this.props.Animals.Fechadenacimiento}
   Raza={this.props.Animals.Raza}
   Barrio={this.props.Animals.Barrio}
    
  myAnimalCards={this.myAnimalCards}/>
             
         </div> 
         
        
            {this.props.Animals.map(item => <Tarjeta animal={item} key={item.Id}  goToAnimal={this.props.goToAnimal} 
            myAnimalCards={this.myAnimalCards}
            />)}
            </div>
  </div>
  

  
            )}}     
   


export default List;