import React from "react";
import './bootstrap/dist/css/bootstrap.css'; 
import Animals from"../App.js";
import "../App.js";
import Tarjeta from "./Tarjeta.js"

class Ficha extends React.Component {
  constructor (props) {
    super(props);
    
  }
render() {
           
   return ( <div className={this.props.animal}>
   <div className="animal">
   <h2 id="Titulo">Ficha</h2>
   <h2 id="Titulo">{this.props.animal.Name}</h2>
   
   <img src={this.props.animal.Imagen} id="imagenmediana"></img>
   <br/>
   <img src="../imagenes/Heart.png "/>
   <br/>
    <dl className="row">
             <dt className="col-sm-3">Categoria:</dt>
             <dd className="col-sm-9">{this.props.animal.Categoría}</dd>
             <br/>
             <dt className="col-sm-3">Sexo</dt>
             <dd className="col-sm-9">{this.props.animal.Sexo}</dd>
             <br/>
             <dt className="col-sm-3">Fecha de nacimiento</dt>
             <dd className="col-sm-9">{this.props.animal.Fechadenacimiento}</dd>
             <br/>
             <dt className="col-sm-3">Raza</dt>
             <dd className="col-sm-9">{this.props.animal.Raza}</dd>
             <br/>
             <dt className="col-sm-3">Barrio</dt>
             <dd className="col-sm-9">{this.props.animal.Barrio}</dd><br/>
             <dt className="col-sm-3">Color de pelo y ojos</dt>
             <dd className="col-sm-9">{this.props.animal.Colordepeloyojos}</dd>
             <br/>
             <dt className="col-sm-3">Descripción</dt>
             <dd className="col-sm-9">{this.props.animal.Descripción}</dd>
             <br/>
           <br/>
           </dl>
           
           <br/>
           <button type="submit"  className="btn btn-primary" onClick={this.props.adoptar(this.props.animal.Id)}>Adoptar</button>
            <button type="submit"id="addWish" onClick={this.props.toggleFavoritesButton}>Guardar como favorito</button>
            <button type="submit" id="volverainicio" onClick={this.props.gotoinicial}>Volver a inicio</button>
            
    </div>        
   </div>
   
      
    )}
};
  

export default Ficha;