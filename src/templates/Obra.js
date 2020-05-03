import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import Carousel from '../components/Carousel/Carousel';
import Img from 'gatsby-image';
import classes from './Obra.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query ($slug: String!) {
        obra: contentfulObra(slug: {eq: $slug}) {
            titulo
            cuerpo{
              json
            }
            slug
            plano{
              title
              fluid{
                ...GatsbyContentfulFluid
              }
            }
            fotos{
                fluid( maxWidth: 3080, quality: 70){
                  aspectRatio
                    ...GatsbyContentfulFluid
                }

            }
        }
    }
`;

export default (props) => {
  const imagenesFormateadas = props.data.obra.fotos.map(img => img.fluid)

  return (
    <Layout notIndex>
      <React.Fragment>
        <div className="container">
          <Carousel imagenes={imagenesFormateadas} />
          <div>
            <div className={classes.description}>
              {documentToReactComponents(props.data.obra.cuerpo.json)}
            </div>
            {props.data.obra.plano ? <div className={classes.plano}>
              <Img fluid={props.data.obra.plano.fluid} />
              <p>{props.data.obra.plano.title}</p>
            </div> : null}
          </div>

        </div>
      </React.Fragment>
    </Layout>

  )
}


