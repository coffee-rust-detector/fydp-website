import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import { NavBarItems } from './NavBarItems';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/fydp-website" className="navbar-logo">
                    FYDP
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FontAwesomeIcon icon="times"/> : <FontAwesomeIcon icon="bars"/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {NavBarItems.map((item, index) =>{
                        return (
                            <li className='nav-item' key={index}>
                                <Link to={item.url} className={item.className} onClick={closeMobileMenu}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar
