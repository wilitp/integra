import React from 'react';
import classes from './Proyectos.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Thumbnail from '../Thumbnail/Thumbnail';
import Gallery from '../Gallery/Gallery';
export default () => {

  const data = useStaticQuery(graphql`
    {
      obra1: contentfulObra(slug: {eq: "obra1"}) {
        fotoPrincipal {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
      obra2: contentfulObra(slug: {eq: "obra2"}) {
        fotoPrincipal {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid

          }
        }
      }
      obra3: contentfulObra(slug: {eq: "obra3"}) {
        fotoPrincipal {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)


  const imagenes = [data.obra1.fotoPrincipal.fluid, data.obra2.fotoPrincipal.fluid, data.obra3.fotoPrincipal.fluid]

  return (
    <div className="container">
      <div className={classes.Proyectos}>
        <h1>Proyectos</h1>
        <Gallery images={imagenes} />
      </div>
    </div>
  )
}

