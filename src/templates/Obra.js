import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import classes from './Obra.module.scss';

export const query = graphql`
    query ($slug: String!) {
        contentfulObra(slug: {eq: $slug}) {
            titulo
            fotoPrincipal {
                fluid(maxWidth: 600) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;

export default (props) => {
    const titulo = props.data.contentfulObra.titulo;
    const img = props.data.contentfulObra.fotoPrincipal.fixed;

    console.log(img)
    return (
        <Layout notIndex>
            <div className={classes.Obra}></div>
            <h1>{titulo}</h1>
            <div>
                <Img fixed={img}/>
            </div>
        </Layout>

    )
}


