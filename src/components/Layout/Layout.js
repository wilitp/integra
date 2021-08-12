import React, { useState } from "react"
import favicon from "../../static/assets/favicon.ico"
import Header from "../Header/Header"
import "../../global.scss"
import * as classes from "./Layout.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../Footer/Footer"
import MobileDrawer from "../MobileMenu/MobileMenu"
import { Helmet } from "react-helmet"
const Layout = (props) => {
  const {
    file: {
      childImageSharp: {
        fluid: { src: ogImage },
      },
    },
  } = useStaticQuery(graphql`
    {
      file(name: { eq: "logo_integra" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  const spacer = props.notIndex ? (
    <div style={{ height: "70px", width: "100%" }}></div>
  ) : null
  const [drawer, setDrawer] = useState(false)

  const showDrawerHandler = () => {
    setDrawer(true)
  }
  const hideDrawerHandler = () => {
    setDrawer(false)
  }

  return (
    <>
      <Helmet
        meta={[
          { name: "og:title", content: "Integra estudio" },
          { name: "og:type", content: "website" },
          {
            name: "og:url",
            content: `https://integraestudio.com.ar`,
          },
          {
            name: "og:image",
            content: `https://integraestudio.com.ar${ogImage}`,
          },
          {
            name: "description",
            content:
              "Integra es un estudio de arquitectura de Córdoba, Argentina. Centrado en brindar una solución completa a cualquier tipo de proyecto de pequeña o mediada escala.",
          },
        ]}
      >
        <link rel="icon" href={favicon} />
        <title>{props.title}</title>
        <link rel="canonical" href={props.url} />
      </Helmet>
      <div style={{ background: "#333" }}>
        {drawer ? <MobileDrawer onHide={hideDrawerHandler} /> : null}
        <Header
          notIndex={props.notIndex}
          close={drawer}
          onToggle={drawer ? hideDrawerHandler : showDrawerHandler}
        />
        {spacer}
        <div className={classes.container}>{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
