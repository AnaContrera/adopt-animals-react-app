import React from 'react';
import '../App.js';
import './list.css';
import '../index.js';
import './bootstrap/dist/css/bootstrap.css'; 
import './buscador.css';
import "./Tarjeta.css";
import goToAnimal from "../App.js"


class Tarjeta extends React.Component {
    constructor (props) {
        super(props);  
      }

       
    
    render(){
        return(
            <div className="col" id="listacatalogo">
        <div className="container">
        <div className="row">
         <div className="card" >
         <div className="col-3" >
         <div className="itemcatalogo">
         <div className={this.props.animal.Id}>
                    
        <img src={this.props.animal.Imagen} className="card-img-top"/><br/>
        <div className="card-body">
        
        <h5 className="card-title">{this.props.animal.Name}</h5>
         <div className="card-text"><p>
         {this.props.animal.Descripción}</p>
         
         <br/>
         <button className="btn btn-primary" onClick={(e) => this.props.goToAnimal(this.props.animal.Id)} id="verficha">Ver Ficha</button> 
         <br/></div>
         </div></div></div>
        </div></div></div></div></div>
              

        )}}
export default Tarjeta;