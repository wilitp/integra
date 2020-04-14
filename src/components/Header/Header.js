import React from 'react';
import { Link } from 'gatsby';
import classes from './Header.module.scss';
const Header = () => {
    return (
        <div className={classes.Header}>
            <h1>Estudio Integra</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/proyectos/">Proyectos</Link></li>
                    <li><Link to="/contacto/">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
