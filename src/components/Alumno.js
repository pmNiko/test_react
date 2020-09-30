import React from 'react';

const styleAlumno = {
    width: '50%',
    marginLeft: '40px'
}

const Alumno = ({nombre, apellido, edad, mascota, hobbies}) => {

    return ( 
        <div style={styleAlumno}> 
            <h2 >Nombre : {nombre}</h2>
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
