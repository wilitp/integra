import React from 'react';
import classes from './Proyectos.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import Img from 'gatsby-image';
export default (props) => {

  const data = useStaticQuery(graphql`
    {
      obra1: contentfulObra(slug: {eq: "obra1"}) {
        slug
        fotoPrincipal {
          fluid {
            ...GatsbyContentfulFluid,
            sizes
          }
        }
      }
      obra2: contentfulObra(slug: {eq: "obra2"}) {
        slug
        fotoPrincipal {
          fluid(sizes: "[ 200, 340, 520, 890 ]") {
            ...GatsbyContentfulFluid,
            sizes

          }
        }
      }
      obra3: contentfulObra(slug: {eq: "obra3"}) {
        slug
        fotoPrincipal {
          fluid(sizes: "[ 200, 340, 520, 890 ]") {
            ...GatsbyContentfulFluid,
            sizes
          }
        }
      }
    }
  `)


  const obras = [data.obra1, data.obra2, data.obra3]
  const imagenesFormateadas = obras.map(obra => {
    return <div className="image-overlay" onClick={() => props.navigate(`/proyecto/${obra.slug}`)}><Img style={{ width: "100%" }} fluid={obra.fotoPrincipal.fluid} /></div>
  })

  const breakpointColumnsObj = {
    default: 2,
    500: 1
  }

  return (
    <div className="container">
      <div className={classes.Proyectos}>
        <h1>Proyectos</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >{imagenesFormateadas}</Masonry>
      </div>
    </div>
  )
}

