import React from "react";
import '../App.js';
import './bootstrap/dist/css/bootstrap.css'; 

class Blog extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      Name: '',
   Imagen:"imagenes/fotoinicio.JPG",
    Description:''
    };
  }
  blogNameChange = (event) => {
    this.setState({ Name: event.target.value });
  }
  
  blogDescripcionChange = (event) => {
    this.setState({ Description: event.target.value });
  }
  blogSubmit = (event) => {
    event.preventDefault(); 
    this.props.addNewcoment ({
      Name: this.state.Name,
     Description:this.state.Descripción,

    });
    this.setState({

      Name: '',
      Description:''});
  }
  
    render ()  {
   return (
     <div className="Blog">
    
     
     <h2 id="Titulo">Blog</h2>
                        <div className="row" id="rowblog">
                 <div className="container" id="form1">
                 <div className="col">
                        <img src="../imagenes/unaydos.jpg" class="mr-3" alt="unaydos" id="imagenpequena"/>
                        <div className="media-body">
                          <h5 className="mt-0">{this.props.comment.Name}</h5>
                          <p>{this.props.comment.Description}</p>
                        </div>
                      </div>                      
                        <img src="../imagenes/unaydos.jpg" class="mr-3" alt="unaydos" id="imagenpequena"/>
                        <div className="media-body">
                          <h5 className="mt-0">{this.props.comment.Name}</h5>
                          <p>{this.props.comment.Description}</p>
                        </div>
                      </div>
                      <div className="container" id="form2">
                      <div className="col-auto" id="forms">
              
                    <form action="url-to-server.php" method="post" onSubmit={this.blogSubmit}>       
                     <h2 id="Titulo">Cuentanos tu experiencia</h2>
                       <form action="url-to-server.php" method="post"> 
                       <form action="url-to-server.php" method="post" id="form1">
                        <label for="Nombre">Nombre:</label>
                        <br/>
                        <input type="text" id="Nombre" placeholder="Ingresa tu nombre"value={this.state.Name} onChange={this.blogNameChange}/>
                            <br/>
                             <label for="Descripcion">Descripcion:</label>
                              <br/>
                                  <textarea cols="40" rows="10" placeholder="Describe tu experiencia"value={this.state.Description} onChange={this.blogDescriptionChange}/>
                                  <br/>    
                              <label for="Foto">Foto:</label><br/>
                          <button type="submit" id="Agregar Foto">Agregar Foto</button>
                           <br/>
                           <br/>
                           <button type="submit" id="Registrar" class="btn btn-primary"onClick={this.props.onblogSubmit}>Agregar Comentario</button>
                         </form></form></form>
                        </div>
                          </div></div></div>
    

     
     
    
    
   );
 }
 }

export default Blog;