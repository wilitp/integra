import React from 'react';
import Layout from '../components/Layout/Layout';
import Gallery from '../components/Gallery/Gallery';
import { useStaticQuery, graphql } from 'gatsby';


export default () => {

  const data = useStaticQuery(graphql`
     {
        allContentfulObra{
          nodes{
            fotoPrincipal{
              fluid(maxWidth: 600) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
  `)

  const imagenes = data.allContentfulObra.nodes.map(node => {
    return node.fotoPrincipal.fluid
  })


  return (
    <Layout notIndex>
      <div className="container">
        <Gallery images={imagenes} />
      </div>
    </Layout>

  )
}

