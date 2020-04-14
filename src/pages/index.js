import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Obra from '../components/Obra/Obra';


export default (props) => {
    const data = useStaticQuery(graphql`
    {
        allStrapiObra{
            nodes{
                titulo,
                slug
            }
        }
    }
    `)
    const obras = data.allStrapiObra.nodes.map(edge => {
        return <Obra key={edge.slug} 
        title={edge.titulo} 
        link={`/obra/${edge.slug}`} />
    });
    return (
        <Layout>
            <h1>Obras</h1>
            <div>
                {obras}
            </div>
        </Layout>
    )
}


