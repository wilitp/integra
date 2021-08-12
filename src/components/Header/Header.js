import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as classes from "./Header.module.scss"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo_integra" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoMini: file(name: { eq: "logo_integra" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logo = (
    <Link to="/">
      <Img draggable={false} fixed={data.logo.childImageSharp.fixed} />
    </Link>
  )
  const logoMini = (
    <Link to="/">
      <Img draggable={false} fixed={data.logoMini.childImageSharp.fixed}></Img>
    </Link>
  )

  const [attached, setAttached] = useState(true)

  const hamburgerClasses = props.close
    ? classes.hamburger + " " + classes.close
    : classes.hamburger

  const toggleAttached = () => {
    const scrolled = window.scrollY
    if (scrolled > 40 && attached === true) {
      setAttached(false)
    } else {
      setAttached(true)
    }
  }

  useEffect(() => {
    if (!props.notIndex) {
      // setAttached(true)
      window.addEventListener("scroll", toggleAttached)
    }
    if (props.notIndex) {
      setAttached(false)
    }
    return () => {
      window.removeEventListener("scroll", toggleAttached)
    }
  }, [])

  const headerClasses =
    attached && !props.notIndex
      ? [classes.Header, classes.attached]
      : [classes.Header]

  return (
    <>
      <div className={headerClasses.join(" ")}>
        <div className={classes.logo}>{logo}</div>
        <div className={classes.logoMini}>{logoMini}</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/proyectos/">Proyectos</Link>
            </li>
            <li>
              <Link to="/contacto/">Contacto</Link>
            </li>
            <li>
              <Link to="/servicios/">Servicios</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div onClick={props.onToggle} className={hamburgerClasses}>
        <div></div>
      </div>
    </>
  )
}

export default Header
