import React from 'react';
import Layout from '../components/Layout/Layout';
import Thumbnail from '../components/Thumbnail/Thumbnail'
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-css';

export default (props) => {

  const data = useStaticQuery(graphql`
    {
      allContentfulObra{
        nodes{
          titulo
          slug
          fotoPrincipal{
            fluid{
              ...GatsbyContentfulFluid,
              sizes
            }
          }
        }
      }
    }
  `)
  const obras = data.allContentfulObra.nodes.map(node => {
    return node
  })
  const imagenesFormateadas = obras.map(obra => {
    return (
      <Thumbnail
        key={obra.slug}
        title={obra.titulo}
        image={obra.fotoPrincipal.fluid}
        clicked={() => props.navigate(`/proyectos/${obra.slug}`)}
      />
    )
  })
  const breakpointColumnsObj = {
    default: 2,
    500: 1
  };
  return (
    <Layout notIndex>
      <Helmet> 
        <link rel="icon" href={favicon} />
        <title>Proyectos - Estudio Integra</title>
        <link rel="canonical" href="http://integraestudio.com.ar/proyectos/" />
      </Helmet>
      <div className="container">
        <h1 style={{ marginTop: "0" }}>Proyectos</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {imagenesFormateadas}
        </Masonry>
      </div>
    </Layout>

  )
}

