import React from "react";
import './buscador.css'; 
import './bootstrap/dist/css/bootstrap.css'; 
class Buscador extends React.Component {
  constructor (props) {
    super(props);
    
  }
 
  
 
render(){
  return(
<div className="row" id="bodycatalogo"  onSubmit={this.props.handleBuscar}>
    <div className="col-2">
      <h2 id="Titulo">Buscador</h2>
      <section>
       <form action="url-to-server.php" method="post" id="Formulariobuscador">
        <label For="Categoría">Categoría:</label>
          <br></br>
          <select  id="Categoria" value={this.props.Animals.Categoría} onChange={this.props.filtroCategoríaChange}>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
            </select>
         <br></br>
       <label For="Sexo">Sexo:</label>
              <br></br>
              <select  id="Sexo"value={this.props.Animals.Sexo} onChange={this.props.filtroSexoChange}>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                </select>
             <br></br>
              
       <label For="Fechadenacimiento">Fecha de nacimiento:</label>
              <br></br>
     <input type="date" id="fechadenacimiento" placeholder="Fecha de nacimiento de tu mascota"value={this.props.Animals.Fechadenacimiento} onChange={this.props.filtroFechadenacimientoChange} ></input>
              <br></br>
      <label For="Raza">Raza:</label>
              <br></br>
              <select id="Raza" value={this.props.Animals.Raza} onChange={this.props.filtroRazaChange}>
                  <option value="">Elige la raza de tu mascota</option>
                  <option value="Mastin">Mastin</option>
                  <option value="Bull dog ingles">Bull dog ingles</option>
                  <option value="Jack russell">Jack russell</option>
                  <option value="Siames">Siames</option>
                  <option value="Otro">Otro</option>
              </select>
              <br></br>
              <label For="Barrio">Barrio:</label>
              <br></br>
              <select id="Barrio" value={this.props.Animals.Barrio} onChange={this.props.filtroBarrioChange}>
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
              <br></br>
            <button type="submit" id="Buscar">Buscar</button>
            </form>
            </section>
            </div>
            </div>

)}}
     export default Buscador;