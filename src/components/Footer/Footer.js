import React from 'react'
import classes from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';


const Footer = () => {
  return (

    <div className={classes.Footer}>
      <div className={classes.icons}>
        <a href="tel:54 9 3516164127" className={classes.icon} >
          <FontAwesomeIcon size="lg" icon={faPhone} />
        </a>
        <a target="blank" href="mailto: arqtobar@gmail.com" className={classes.icon} >
          <FontAwesomeIcon size="lg" icon={faEnvelope} />
        </a>
        <div className={classes.icon} style={{ padding: "5px 10px" }}>
          <FontAwesomeIcon size="lg" icon={faFacebookSquare} />
        </div>
        <a target="blank" href="http://www.google.com" className={classes.icon} style={{ padding: "4px 6px" }}>
          <FontAwesomeIcon size="lg" icon={faInstagram} />
        </a >
      </div>
      <div className={classes.sections}>

        <section className={classes.section}>
          <strong>Contacto</strong>
          <p>arqtobar@gmail.com</p>
          <p>54 9 3516164127</p>
        </section>
        <section className={classes.section}>
          <strong>Menu</strong>
          <Link to="/">Inicio</Link>
          <Link to="/proyectos/" >Proyectos</Link>
          <Link to="/contacto/">Contacto</Link>
          <Link to="/estudio/">Estudio</Link>
        </section>
        <div style={{ color: "#aaa", fontSize: "12px", textAlign: "left" }}>
          2020 Integra ©
        </div>
        {/* <section className={classes.section}>
          Teléfono y mail
        </section> */}
      </div>

    </div>

  )
}

export default Footer
