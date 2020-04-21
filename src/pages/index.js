import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroBox from '../components/HeroBox/HeroBox';
import Servicios from '../components/Servicios/Servicios';
import Proyectos from '../components/Proyectos/Proyectos';

export default () => {

    return (
        <Layout>
            <HeroBox />
            <Servicios/>
            <Proyectos/>
        </Layout>
    )
}


