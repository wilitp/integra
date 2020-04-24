import React from 'react';
import { Link } from 'gatsby';
import classes from './MobileDrawer.module.scss';

const MobileDrawer= (props) => {
  return (
    <div onClick={props.onHide} className={classes.MobileDrawer}>
      <Link to="/">Inicio</Link>
      <Link to="/proyectos/">Proyectos</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/servicios">Servicios</Link>
    </div>
  )
}

export default MobileDrawer
