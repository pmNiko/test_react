import React from 'react';

const styleAside = {
    float: 'right',
    marginBottom: '50px',
    width: '20%',
    height: '50px', 
    padding: '10px',
    marginRight: '10px',
    fontStyle: 'italic',
    backgroundColor: '#f9f9f9',

}

const Aside = () => {
    return (
        <aside style={styleAside}>
            Area de información de la página web
        </aside>
    )
}

export default Aside;
