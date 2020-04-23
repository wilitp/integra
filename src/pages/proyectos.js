import React from 'react';
import Layout from '../components/Layout/Layout';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Masonry from 'react-masonry-css';

export default (props) => {

  const data = useStaticQuery(graphql`
    {
      allContentfulObra{
        nodes{
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
    console.log(props)
  const obras = data.allContentfulObra.nodes.map(node => {
    return node
  })
  const imagenesFormateadas = obras.map(obra => {
    return <div key={obra.slug} className="image-overlay" onClick={() => props.navigate(`/proyecto/${obra.slug}`)}><Img style={{ width: "100%" }} fluid={obra.fotoPrincipal.fluid} />
    </div>
  })
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1
  };
  return (
    <Layout notIndex>
      <div className="container">
        <h1>Proyectos</h1>
        {/* <MasonryLayout columns={3} gap={4}>{imagenesFormateadas}</MasonryLayout> */}
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

