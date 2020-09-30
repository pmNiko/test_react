import React from 'react';

const styleNav = {
    padding: '0px',
    marginTop: '45px'
}
const styleUl = {
    padding: '0px',
    height: '40px',
    backgroundColor: 'white', 
    textAlign: 'center',
}
const styleLi = {
    display: 'inline-block',
    width: '150px', 
    textAlign: 'center',
}
const styleA = {
    textDecoration: 'none',
    lineHeight: '2',
    fontSize: '18px',
    fontFamily: 'Roboto',
    textTransform: 'uppercase', 
    color: 'black'
}
// rfcp rafc
const navItems = [
    {
        title: 'Home',
        link: '/home'
    },
    {
        title: 'About',
        link: '/about'
    }
]

const Nav = () => {
    return (
        <nav style={styleNav}>
            <ul style={styleUl} > 
                {navItems.map((nav, i) =>(
                    <li key={nav.title + i } style={styleLi}>
                        <a href={nav.link} style={styleA}> 
                            {nav.title} 
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Nav;