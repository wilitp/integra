import React from 'react';
import * as classes from './HeroBox.module.scss';
import BackgroundImage from 'gatsby-background-image';
import Button from '../Button/Button';
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


  return (
    <BackgroundImage className={classes.HeroBox} fluid={data.file.childImageSharp.fluid} tag="div">
      <main >
        <h1>Estudio Integra</h1>
        <span>
          Un estudio de arquitectura dinámico, flexible e integral. Centrado en las necesidades de cada cliente.
        </span>
        <div className={classes.buttons}>
          <Button link={'/proyectos/'} type={"successOutline"}>Ver Proyectos</Button>
          <Button link={'/contacto'} type={"secondaryOutline"}>Contacto</Button>
        </div>
        <div className={classes.button}>
          <Button centered link={'/contacto'} type={"secondaryOutline"}>Contacto</Button>
        </div>
      </main>

    </BackgroundImage>
  )
}



export default HeroBox
