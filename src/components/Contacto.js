import React from "react";
import './buscador.css'; 
import './bootstrap/dist/css/bootstrap.css'; 
import Animals from"../App.js"
import "./Contacto.css"


class Contacto extends React.Component {
    constructor (props) {
        super(props);
        
      }
render() {
           
    return ( <div className={this.props.animal}>
        <div className="animal">
        <h2 id="Titulo">Ficha</h2>
        <h2 id="Titulo">{this.props.animal.Name}</h2>
        <p>{this.props.animal.Descripción}</p>   
       
        <img src={this.props.animal.Imagen} id="imagenmediana"></img>
        <br/>
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
               
           <h3 id="Titulo">Datos de contacto</h3>
           <div>
               <dl>
           <dt className="col-sm-3">Nombre</dt>
             <dd className="col-sm-9">{this.props.animal.Nombre}</dd><br/>
             <dt className="col-sm-3">Teléfono</dt>
             <dd className="col-sm-9">{this.props.animal.Telefono}</dd>
             <br/>
             <dt className="col-sm-3">Email</dt>
             <dd className="col-sm-9">{this.props.animal.Email}</dd>
             </dl>
           </div>
             <button type="submit" id="guardarcomofavorito" onClick={this.props.toggleFavoritesButton}>Guardar como favorito</button>
            <button type="submit" id="volverainicio" onClick={this.props.gotoinicial}>Volver a inicio</button>
    </div>        
   </div>
   
    )}
};
export default Contacto;