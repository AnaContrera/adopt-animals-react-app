import React from "react";
import './buscador.css'; 
import './bootstrap/dist/css/bootstrap.css'; 
import Animals from"../App.js";
import Ficha from"./Ficha.js";
import { isTemplateLiteral } from "@babel/types";

 class Catalogo extends React.Component {
    constructor(props) {
        super(props);
                
       
            
        }
         render() {
          {Animals.map(Animal=> <Ficha Animal={Animals} key={this.Animals.Id} />)}
            return (
                            
             
         <div className="Animals">      
       <div className="Tarjetaheader" className="card" style="width: 18rem;" className="col-3" className="itemcatalogo">{this.props.Imagen}</div>
       <div className="card-body">{this.props.Name}</div>
       <div class="card-text"><p>{this.props.Barrio}</p><br></br>,<p> {this.props.Descripcion}</p>
       <br></br>
       <button className="btn btn-primary" onClick={(e) => this.props.goToAnimal(this.props.Animals, e)}>Ver Ficha</button> 
        </div>
        </div>
       
            
            )}}  
    
export default Catalogo;