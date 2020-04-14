import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug: String!){
        strapiObra(slug: {eq: $slug}){
            titulo,
        }
    }
`

export default (props) => {
    return (
        <Layout>
            <h1>{props.data.strapiObra.titulo}</h1>
            <p>jajaj alejo puto</p>
        </Layout>

    )
}


