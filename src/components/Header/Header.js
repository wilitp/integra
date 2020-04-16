import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classes from './Header.module.scss';

const Header = (props) => {


    const data = useStaticQuery(graphql`
    {
        logo: file(name: { eq: "logo_integra" } ){
        childImageSharp{
            fixed(height: 40) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `)


    const logo = <Img fixed={data.logo.childImageSharp.fixed} />


    return (
        <div className={classes.Header}>
            <div className={classes.logo}>{logo}</div>
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
