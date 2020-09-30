import React from 'react';

const styleFooter = {
    position: 'fixed',
    margin: '0',
    bottom: 0,
    background: 'black',
    color: 'white',
    height: '7%',
    width: '100%',
    textAlign: 'center',
    lineHeight: '3', 
}

const Footer = () => {
    return (
        <footer style={styleFooter}>
        
            Todos los derechos reservados &copy; 2020
            
        </footer>
    )
}

export default Footer;
