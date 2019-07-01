import React from 'react';
import './App.css';
import './bootstrap/dist/css/bootstrap.css'; 
import './components/inicial.js'; 
import './components/registro.js';
import "./components/list.js";
import "./components/blog.js"; 
import Blog from './components/blog.js';
import Registro from './components/registro.js';
import Inicial from './components/inicial.js';
import List from './components/list.js';
import Ficha from"./components/Ficha.js";
import Contacto from"./components/Contacto.js";


class App extends React.Component { 
  
  constructor(props) {
    super(props); 
         
      this.state ={ currentSection:"Inicial", 
      Animals:[
    {Id:"1",
    Name:<h5>"Marco"</h5>, 
    Imagen:"../imagenes/Marco.JPG",
     Descripción:"Descripcion de Marco",
     Categoría:"Perro",
     Sexo:"Masculino",
     Fechadenacimiento:"23/11/2008",
     Raza:"Mastin",
     Barrio:"Otro",
     Colordepeloyojos:"Otro",
     Nombre:"Otro",
     Telefono:"Otro",
     Email:"Otro"
    },
    {Id:"2",
    Name:<h5>"Paca"</h5>, 
    Imagen:"../imagenes/Paca.JPG",
     Descripción:"Descripcion de Paca",
     Categoría:"Perro",
     Sexo:"Femenino",
     Fechadenacimiento:"30/04/2018",
     Raza:"Mastin",
     Barrio:"Aguada",
     Colordepeloyojos:"Otro",
     Nombre:"Otro",
     Telefono:"Otro",
     Email:"Otro"
    },
    {Id:"3",
    Name:<h5>"Lupe"</h5>, 
    Imagen:"../imagenes/Lupe.JPG",
     Descripción:"Descripcion de Lupe",
     Categoría:"Perro",
     Sexo:"Femenino",
     Fechadenacimiento:"09/05/2018",
     Raza:"Jack Russell",
     Barrio:"Carrasco",
     Colordepeloyojos:"Otro",
     Nombre:"Otro",
     Telefono:"Otro",
     Email:"Otro"
    },
    {Id:"4",
    Name:<h5>"Sasha"</h5>, 
    Imagen:"../imagenes/Sasha.JPG",
     Descripción:"Descripcion de Sasha",
     Categoría:"Perro",
     Sexo:"Femenino",
     Fechadenacimiento:"02/011/2008",
     Raza:"Otro",
     Barrio:"Otro",
     Colordepeloyojos:"Otro",
     Nombre:"Otro",
     Telefono:"Otro",
     Email:"Otro"
    },
    {Id:"5",
    Name:<h5>"Hugo"</h5>, 
    Imagen:"../imagenes/Hugo.JPG",
     Descripción:"Descripcion de Hugo",
     Categoría:"Perro",
     Sexo:"Masculino",
     Fechadenacimiento:"02/11/2018",
     Raza:"Bull dog inglés",
     Barrio:"Pocitos",
     Colordepeloyojos:"Otro",
     Nombre:"Otro",
     Telefono:"Otro",
     Email:"Otro"
    },
    {Id:"6",
    Name:<h5>"Neko"</h5>, 
    Imagen:"../imagenes/Neko.JPG",
     Descripción:"Descripcion de Neko",
     Categoría:"Gato",
     Sexo:"Masculino",
     Fechadenacimiento:"02/01/2017",
     Raza:"Siames",
     Barrio:"Otro",
     Colordepeloyojos:"Otro",
     Nombre:"Otro",
     Telefono:"Otro",
     Email:"Otro"
    },
    {Id:"7",
    Name:<h5>"Estrella"</h5>, 
    Imagen:"../imagenes/Estrella.JPG",
     Descripción:"Descripcion de Estrella",
     Categoría:"Gato",
     Sexo:"Femenino",
     Fechadenacimiento:"02/11/2017",
     Raza:"Otro",
     Barrio:"Otro",
     Colordepeloyojos:"Otro",
     Nombre:"Otro",
     Telefono:"Otro",
     Email:"Otro"
    },
    {Id:"8",
    Name:<h5>"Yako"</h5>, 
    Imagen:"../imagenes/Yako.JPG",
    Descripción:"Descripcion de Yako",
    Categoría:"Perro",
    Sexo:"Masculino",
    Fechadenacimiento:"02/11/2018",
    Raza:"Otro",
    Barrio:"Otro",
    Colordepeloyojos:"Otro",
    Nombre:"Otro",
    Telefono:"Otro",
    Email:"Otro"
    }
 ],
 Comments:  [
  {kn:"1",
  Name:"Ana y Gaston", 
  Imagen:"../imagenes/unaydos.jpg",
   Description:"Excelente experiencia.Adoptamos dos hermosas mascotas. El proceso fue muy sencillo y claro. Muchas gracias!"}]
}};

gotoinicial=() => {
    this.setState({currentSection: "inicial"});
};

gotolist=() => {
    this.setState({
    currentSection: "list"
  });
};
 
gotoregistro=() => {
  this.setState({currentSection: "registro" });
};
  gotoblog=() => {
    this.setState({currentSection:"blog"});
  };
    
goToAnimal=(currentAnimal) => {
  this.setState( {
    currentSection: "Ficha",
    currentAnimal: currentAnimal});
 };
  
 
 getNextanimalId() {
 var animalWithHighestId = this.state.Animals.sort((a, b) => b.id - a.id)[0];
  if (animalWithHighestId === undefined) {
 return 1; 
} else {
 return animalWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
 }
};

getNextcomentkn() {
  var commentWithHighestId = this.state.Comments.sort((a, b) => b.id - a.id)[0];
   if (commentWithHighestId === undefined) {
  return 1; 
 } else {
  return commentWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
  }
 };

addNewanimal=(newanimal) => {
  this.setState( {
  Animals: [...this.state.Animals, {
  Id: this.getNextanimalId(),
  Name: newanimal.Name,
  Imagen: newanimal.Imagen,
  Descripción: newanimal.Descripción,
  Categoría: newanimal.Categoría,
  Sexo: newanimal.Sexo,
  Fechadenacimiento: newanimal.Fechadenacimiento,
  Raza: newanimal.Raza,
  Barrio: newanimal.Barrio,
  Colordepeloyojos: newanimal.Colordepeloyojos,
  Nombre:newanimal.Nombre,
  Telefono: newanimal.Telefono,
  Email: newanimal.Email
  }]
  });
};
addNewcoment=(newcoment) => {
  this.setState( {
  Comments: [...this.state.Comments, {
  kn: this.getNextcomentkn(),
  Name: newcoment.Name,
  Description: newcoment.Description }]
});
};
// 
//


//favoritos=() => {
 // this.setState({currentSection:"blog"})}
adoptar=(currentAnimal) => {
this.setState({
currentSection: "Contacto",
    currentAnimal: currentAnimal});
 };

//ADD TO WISHLIST

//toggleFavoritesButton = () => {
  ////this.setState({
  //  showFavoritesButton: !this.state.showFavoritesButton
//  });
//}

onHandleBuscar= (event) => { event.preventDefault(); 

}



onHandleSubmit = () => {
 this.props.addNewanimal({ 
  Name: this.state.Name,
 Imagen:"./imagenes/fotoinicio.JPG",
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
}

onblogSubmit = () => {
  this.props.addNewcoment({ 
   Name: this.state.Name,
  Imagen:"./imagenes/fotoinicio.JPG",
   Descripción:this.state.Descripción
  });}
renderCurrentSection() {
  
  switch (this.state.currentSection) {
  case 'list':
    return (
      <List
      goToAnimal={this.goToAnimal}
        Animals={this.state.Animals}
        Ficha={this.state.Animals.Ficha}
        animal={this.state.Animals.find(item => item.Id === this.state.currentAnimal)}
        key={this.state.Animals.Id}
        Name={this.state.Animals.Name}
        Imagen={this.state.Animals.Imagen}
        Descripción={this.state.Animals.Descripción}
    />);
    
    case 'registro':
    return (
      <Registro addNewanimal={this.addNewanimal}
      getNextanimalId={this.getNextanimalId}
      Animals={this.state.Animals}
      key={this.state.Animals.Id}
 Name={this.state.Animals.Name}
 Imagen={this.state.Animals.Imagen}
 Descripción={this.state.Animals.Descripción}
 Categoría={this.state.Animals.Categoría}
 Sexo={this.state.Animals.Sexo}
 Fechadenacimiento={this.state.Animals.Fechadenacimiento}
 Raza={this.state.Animals.Raza}
 Barrio={this.state.Animals.Barrio}
 Colordepeloyojos={this.state.Animals.Colordepeloyojos}
Nombre={this.state.Animals.Nombre}
Telefono={this.state.Animals.Telefono}
Email={this.state.Animals.Email} />
    );
    
    case 'blog':
    return (
      <Blog addNewcoment={this.addNewcoment}
      getNextcomentkn={this.getNextcomentkn}
      Comments={this.state.Comments}
      key={this.state.Comments.kn}
 Name={this.state.Comments.Name}
 Imagen={this.state.Comments.Imagen}
 Description={this.state.Comments.Description}
comment={this.state.Comments[0]}


      />
    );
    case 'Ficha':
    return (
      <Ficha animal={this.state.Animals.find(item => item.Id === this.state.currentAnimal)} 
      adoptar={this.adoptar}
      goToAnimal={this.goToAnimal}
      gotoinicial={this.gotoinicial}
        Animals={this.state.Animals}
         Id={this.state.Animals.Id}
   Name={this.state.Animals.Name}
   Imagen={this.state.Animals.Imagen}
   Descripción={this.state.Animals.Descripción}
   Categoría={this.state.Animals.Categoría}
   Sexo={this.state.Animals.Sexo}
   Fechadenacimiento={this.state.Animals.Fechadenacimiento}
   Raza={this.state.Animals.Raza}
   Barrio={this.state.Animals.Barrio}
   Colordepeloyojos={this.state.Animals.Colordepeloyojos}
  Nombre={this.state.Animals.Nombre}
  Telefono={this.state.Animals.Telefono}
  Email={this.state.Animals.Email}
      />
      );
  case 'Contacto':
  return (
    <Contacto animal={this.state.Animals.find(item => item.Id === this.state.currentAnimal)} 
    adoptar={this.adoptar}
    goToAnimal={this.goToAnimal}
    gotoinicial={this.gotoinicial}
      Animals={this.state.Animals}
      key={this.state.Animals.Id}
 Name={this.state.Animals.Name}
 Imagen={this.state.Animals.Imagen}
 Descripción={this.state.Animals.Descripción}
 Categoría={this.state.Animals.Categoría}
 Sexo={this.state.Animals.Sexo}
 Fechadenacimiento={this.state.Animals.Fechadenacimiento}
 Raza={this.state.Animals.Raza}
 Barrio={this.state.Animals.Barrio}
 Colordepeloyojos={this.state.Animals.Colordepeloyojos}
Nombre={this.state.Animals.Nombre}
Telefono={this.state.Animals.Telefono}
Email={this.state.Animals.Email}/>);
     
  case 'inicial':
  default:
    return <Inicial />; }
  }
  
render(){
   return (
    <div className="App1">
      <div className="HeaderyNavbar">
        <h1 id="Titulo">Adopta tu mascota
        <img src="imagenes/logo2.jpg" alt="logo" className="logo" id="imagenpequena"/>
        <header id= "navbarcolor">
        <nav>
        <div>
                
    <button className="btn btn-outline-success"  type="button" id="botonnav" onClick ={this.gotoinicial}>Inicio</button>
    <button className="btn btn-outline-success"  type="button" id="botonnav" onClick ={this.gotolist}>Catálogo</button>
    <button className="btn btn-outline-success"  type="button" id="botonnav" onClick ={this.gotoregistro}>Registro</button>
    <button className="btn btn-outline-success"  type="button" id="botonnav" onClick ={this.gotoblog}>Blog</button>
                
            </div>
        </nav>
    </header>
        </h1>
      </div>
      <div className="body">
      {this.renderCurrentSection()}
           </div>
    </div>
    )}
   }


export default App;
