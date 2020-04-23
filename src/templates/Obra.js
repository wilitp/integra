import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import classes from './Obra.module.scss';
import Masonry from 'react-masonry-css';

export const query = graphql`
    query ($slug: String!) {
        contentfulObra(slug: {eq: $slug}) {
            titulo
            fotos{
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;

export default (props) => {
    const imagenesFormateadas = props.data.contentfulObra.fotos.map(img => <Img fluid={img.fluid} />)
    const breakpointColumnsObj = {
        default: 3,
        900: 2,
        500: 1
    }
    return (
        <Layout notIndex>
            <div className="container">
                <h1>{props.data.contentfulObra.titulo}</h1>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >{imagenesFormateadas}
                </Masonry>
            </div>

        </Layout>

    )
}


