import React, { useEffect, useState } from 'react';
import useWidth from '../../hooks/useWidth';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classes from './Header.module.scss';

const Header = (props) => {

    const data = useStaticQuery(graphql`
    {
        logo: file(name: { eq: "logo_integra" } ){
        childImageSharp{
            fixed(height: 50) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        logoMini: file(name: {eq: "logo_integra"}){
            childImageSharp{
                fixed(height: 30){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `)

    const width = useWidth();
    const logo = <Link to="/"><Img draggable={false} fixed={data.logo.childImageSharp.fixed} /></Link>
    const logoMini = <Link to="/"><Img draggable={false} fixed={data.logoMini.childImageSharp.fixed}></Img></Link>


    const [attached, setAttached] = useState(true);

    const hamburgerClasses = props.close ? classes.hamburger + " " + classes.close : classes.hamburger;

    const toggleAttached = () => {
        const scrolled = window.scrollY;
        if (scrolled > 40 && attached === true) {
            setAttached(false);
        }
        else {
            setAttached(true);
        }
    }


    useEffect(() => {
        if (!props.notIndex) {
            // setAttached(true)
            window.addEventListener('scroll', toggleAttached);

        }
        if (props.notIndex) {
            setAttached(false)
        }
        return () => {
            if (!props.notIndex) {
                window.removeEventListener('scroll', toggleAttached)

            }
        }
    }, [])


    const headerClasses = attached && !props.notIndex ? [classes.Header, classes.attached] : [classes.Header];


    return (
        <>
            <div className={headerClasses.join(" ")}>
                <div className={classes.logo}>{width > 750 ? logo : logoMini}</div>
                {width > 750 ? <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/proyectos/">Proyectos</Link></li>
                        <li><Link to="/contacto/">Contacto</Link></li>
                        <li><Link to="/servicios/">Servicios</Link></li>

                    </ul>
                </nav> : null}
            </div>
            {width < 750 ? <div onClick={props.onToggle} className={hamburgerClasses}><div></div></div> : null}
        </>
    )
}


export default Header
