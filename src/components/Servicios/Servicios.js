import React from 'react';
import classes from './Servicios.module.scss';
import Servicio from './Servicio/Servicio';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../Button/Button';


export default () => {


  const data = useStaticQuery(graphql`
    {
        blanco: file(name: { eq: "blanco" } ){
        childImageSharp{
            fixed(height: 50) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        naranja: file(name: { eq: "naranja" } ){
        childImageSharp{
            fixed(height: 50) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        verde: file(name: { eq: "verde" } ){
        childImageSharp{
            fixed(height: 50) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
  `)


  const images = {
    verde: <Img fixed={data.verde.childImageSharp.fixed} />,
    naranja: <Img fixed={data.naranja.childImageSharp.fixed} />,
    blanco: <Img fixed={data.blanco.childImageSharp.fixed} />
  }

  return (
    <div className="greyContainer">
      <div className={classes.Servicios}>
        <h1>Servicios </h1>
        <div className={classes.containerServicios}>
          <Servicio
            icon={images.blanco}
            title={"Diseño"}
            description={"Centrado en la calidad de vida de sus usuarios."}
          />
          <Servicio
            icon={images.verde}
            title={"Obra"}
            description={"Optimiza sistemas de la edificación reduciendo el impacto ambiental."}
          />
          <Servicio
            icon={images.naranja}
            title={"Gestión"}
            description={"Racionaliza los recursos para lograr reducción de costos."}
          />

        </div>

      </div>
      <Button centered link={"/servicios/"}>Conocer más</Button>
      

    </div>
  )
}

