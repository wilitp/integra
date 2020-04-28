import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import classes from './Obra.module.scss';
import Masonry from 'react-masonry-css';

export const query = graphql`
    query ($slug: String!) {
        contentfulObra(slug: {eq: $slug}) {
            titulo
            slug
            
            fotos{
                fluid( maxWidth: 3080, quality: 80){
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;

export default (props) => {
    const imagenesFormateadas = props.data.contentfulObra.fotos.map(img => <div style={{height: "50vh", width: "100%"}}><Img key={img.id} fluid={img.fluid} /></div>)
    const breakpointColumnsObj = {
        default: 1,
        500: 1
    }
    return (
        <Layout notIndex>
            <div className="container">
                {/* <h1>{props.data.contentfulObra.titulo}</h1>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >{imagenesFormateadas}
                </Masonry> */}
                <Carousel dynamicHeight infiniteLoop>
                    {imagenesFormateadas}
                </Carousel>
            </div>

        </Layout>

    )
}


