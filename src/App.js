import React from 'react';
import Alumno from './components/Alumno';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Aside from './components/layout/Aside';

// JSX


const App = () => {

  return (
    <div>
      <Header />
      <Nav/>
      <Alumno 
        nombre='Franco' 
        apellido='di leo' 
        mascota='Amazonas' 
        edad={31}
        hobbies = {['Cross', ' Nerdear', ' Criptosumas']}
      />
      <hr></hr>
      <Alumno
        nombre='Matias' 
        apellido='Ponti' 
        mascota='Polly' 
        edad={28}
        hobbies = {['Guitarra', ' Coding 😆']}
      />

      <Aside/>

      <Footer/>
    </div>
  );
}

export default App;
