import React from "react";
import './bootstrap/dist/css/bootstrap.css'; 
import '../App.js';
import './registro.css';
import App from '../App.js';

class Registro extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    Name: '',
 Imagen:"imagenes/fotoinicio.JPG",
  Descripción:'',
  Categoría:'',
  Sexo:'',
  Fechadenacimiento:'',
  Raza:'',
    Barrio:'',
    Colordepeloyojos:'',
    Nombre:'',
  Telefono:'',
  Email:''
  };
}

handleNameChange = (event) => {
  this.setState({ Name: event.target.value });
}

handleDescripcionChange = (event) => {
  this.setState({ Descripción: event.target.value });
}
handleCategoriaChange = (event) => {
  this.setState({ Categoría: event.target.value });
}
handleSexoChange = (event) => {
  this.setState({ Sexo: event.target.value });
}
handleFechadenacimientoChange = (event) => {
  this.setState({ Fechadenacimiento: event.target.value });
}

handleRazaChange = (event) => {
  this.setState({ Raza: event.target.value });
}
handleColordepeloyojosChange = (event) => {
  this.setState({ Colordepeloyojos: event.target.value });
}
handleBarrioChange = (event) => {
  this.setState({ Barrio: event.target.value });
}
handleNombreChange = (event) => {
  this.setState({ Nombre: event.target.value });
}
handleTelefonoChange = (event) => {
  this.setState({ Telefono: event.target.value });
}
handleEmailChange = (event) => {
  this.setState({ Email: event.target.value });
}
handleSubmit = (event) => {
  event.preventDefault(); 
  this.props.addNewanimal ({
    Name: this.state.Name,
   Descripción:this.state.Descripción,
  Categoría:this.state.Categoría,
  Sexo:this.state.Sexo,
  Fechadenacimiento:this.state.Fechadenacimiento,
  Raza:this.state.Raza,
  Barrio:this.state.Barrio,
  Colordepeloyojos:this.state.Colordepeloyojos,
  Nombre:this.state.Nombre,
  Telefono:this.state.Telefono,
  Email:this.state.Email
  });
  
  
  this.setState({

  Name: '',
  Imagen:'',
  Descripción:'',
  Categoría:'',
  Sexo:'',
  Fechadenacimiento:'',
  Raza:'',
  Barrio:'',
  Colordepeloyojos:'',
  Nombre:'',
  Telefono:'',
  Email:''
  });
}
    render ()  {
   return (
    
           
        
    <div className="row"> 
<form action="url-to-server.php" method="post"  onSubmit={this.handleSubmit}>

<div className="container" id="form1">
<div className="col-7">
      <h2 id="Titulo">Registro</h2>
      
        <label For="Categoria">Categoria:</label>
          <br></br>
          <select required id="Categoria" value={this.state.Categoría} onChange={this.handleCategoriaChange}>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
            </select>
         <br></br>
        <label For="Nombre">Nombre:</label>
        <br></br>
        <input type="text" id="Nombre" placeholder="Nombre de la mascota"value={this.state.Name} onChange={this.handleNameChange}/>
            <br/>
            <label For="Sexo">Sexo:</label>
              <br/>
              <select required id="Sexo" value={this.state.Sexo} onChange={this.handleSexoChange}>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                </select>
             <br/>
             <label For="Fechadenacimiento">Fecha de nacimiento:</label>
             <br/>
     <input type="date" id="fechadenacimiento" placeholder="Fecha de nacimiento de tu mascota"value={this.state.Fechadenacimiento} onChange={this.handleFechadenacimientoChange} required/>
             <br/>  
       <label For="Raza">Raza:</label>
              <br></br>
              <select required id="Raza" value={this.state.Raza} onChange={this.handleRazaChange}>
                  <option value="">Elige la raza de tu mascota</option>
                  <option value="Mastin">Mastin</option>
                  <option value="Bull dog ingles">Bull dog ingles</option>
                  <option value="Jack russell">Jack russell</option>
                  <option value="Siames">Siames</option>
                  <option value="Otro">Otro</option>
              </select>
              <br/> 
              <label For="Barrio">Barrio:</label>
              <br></br> 
              <select required id="Barrio"value={this.state.Barrio} onChange={this.handleBarrioChange}>
                  <option value="">Selecciona tu barrio</option>
                  <option value="Todos">Todos</option>
                  <option value="Aguada">Aguada</option>
                  <option value="Carrasco">Carrasco</option>
                  <option value="Centro">Centro</option>
                  <option value="Parque Rodo">Parque rodo</option>
                  <option value="Pocitos">Pocitos</option>
                  <option value="Otro">Otro</option>
              </select>
              <br></br>
              <label For="Color de pelo y ojos">Color de pelo y ojos:</label>
              <br></br>
              <input type="text" id="Color de pelo y ojos" placeholder="Color de pelo y ojos"value={this.state.Colordepeloyojos} onChange={this.handleColordepeloyojosChange}/>
                  <br></br>
              <label For="Descripcion">Descripcion:</label>
              <br></br>
                  <textarea name="Descripcion" id="Descripcion" cols="40" rows="10" placeholder="Descripcion"value={this.state.Descripción} onChange={this.handleDescripcionChange}></textarea>
                  <br/> 
              <label For="Foto">Foto:</label>
             
          <button  id="Agregar Foto">Agregar Foto</button>
         
            </div>
    
    
            <div className="container">
    <div  id="form2" className="col-4">
    <br/>   
           <div action="url-to-server.php" method="post">
          <h5 id="Titulo">Datos de contacto</h5>
          <br/>
          <label For="Nombre" className="Name">Nombre:</label>
          <br/>
          <input type="text" id="Nombre" placeholder="Nombre del contacto" value={this.state.Nombre} onChange={this.handleNombreChange}/>
          <br/>
          <label For="Telefono" className="Telefono">Teléfono:</label>
          <br/>
          <input id="Telefono" type="text" placeholder="Telefono de contacto" value={this.state.Telefono} onChange={this.handleTelefonoChange}/>
          <br/>
          <label For="email">Email:</label>
            <br/>
            <input type="email" id="email" placeholder="Ingrese email" value={this.state.Email} onChange={this.handleEmailChange}/>
           <br/>
           <br/>
            <button type="submit" id="Registrar" className="btn btn-primary"onClick={this.props.onHandleSubmit}>Registrar</button>
             
    </div>
    </div>
    </div>
    </div>
    </form></div>
    
   )}}

export default Registro;