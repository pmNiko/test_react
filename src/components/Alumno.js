import React from 'react';

const styleAlumno = {
    color: 'tomato',
    fontSize : '20px'
}

const Alumno = ({nombre, apellido, edad, mascota, hobbies}) => {

    return ( 
        <div> 
            <h2 style={styleAlumno}>Nombre : {nombre}</h2>
            <h2>Apellido : {apellido}</h2>
            <h2>Edad : {edad}</h2>
            <h3>Mascota : {mascota}</h3>
            <p>Hobbies : </p> {hobbies.length ? list(hobbies) : "-" }
        </div>
     );
}

const list = (hobbies) => {
    return (
        <ul>
            {hobbies.map((hobbie, i) => (
                <li key={hobbie + i}>{hobbie}</li>
            ))}
        </ul>
    )
}
 
export default Alumno;
