import React from 'react';
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
        <nav>
            <ul> 
                {navItems.map((nav, i) =>(
                    <li key={nav.title + i }>
                         <a href={nav.link}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Nav;