import React from 'react';
import Alumno from './components/Alumno';
import Nav from './components/layout/Nav';

// JSX

const App = () => {

  return (
    <div>
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
    </div>
  );
}

export default App;
