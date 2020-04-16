import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/Layout';
import Thumbnail from '../components/Thumbnail/Thumbnail';
import HeroBox from '../components/HeroBox/HeroBox';


export default () => {
    
    return (
        <Layout>
            <HeroBox/>
            
        </Layout>
    )
}


