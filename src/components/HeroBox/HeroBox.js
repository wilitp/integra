import React from 'react';
import classes from './HeroBox.module.scss';
import BackgroundImage from 'gatsby-background-image';
import Button from '../Button/Button';
import useWidth from '../../hooks/useWidth';
import { useStaticQuery, graphql } from 'gatsby';



const HeroBox = (props) => {

  const data = useStaticQuery(graphql`
     {
       file(name: {eq: "fondo_hero"}){
         childImageSharp{
           fluid(quality: 100, maxWidth: 1920){
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
  `)

  const width = useWidth()

  return (
    <BackgroundImage className={classes.HeroBox} fluid={data.file.childImageSharp.fluid} tag="div">
      <main className={width < 620 ? classes.mobile : null}>
        <h1>Estudio Integra</h1>
        <span>Un estudio de arquitectura dinámico, flexible e integral. Centrado en las necesidades de cada cliente.
          </span>
        {width > 620 ? <Button link={'/proyectos/'} type={"successOutline"}>Ver Proyectos</Button> : null}
        <Button centered={width < 620} link={'/contacto'} type={"secondaryOutline"}>Contacto</Button>
      </main>

    </BackgroundImage>
  )
}



export default HeroBox
