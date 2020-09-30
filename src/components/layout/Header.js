import React from 'react';

const styleHeader = {
    position: 'fixed',
    top: 0,
    background: 'black',
    color: 'white',
    height: '5%',
    width: '100%',
    textAlign: 'center',
    
}


const Header = () => {
    return (
        <header style={styleHeader}>
            <p>Bienvenidos a React JS</p>
        </header>
    )
    
}

export default Header;
