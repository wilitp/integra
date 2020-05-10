import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroBox from '../components/HeroBox/HeroBox';
import Servicios from '../components/Servicios/Servicios';
import Proyectos from '../components/Proyectos/Proyectos';
import Footer from '../components/Footer/Footer';
import Estudio from '../components/Estudio/Estudio';

export default (props) => {

    return (
        <Layout>
            <Helmet>
                <link rel="icon" href={favicon} />
                <title>Estudio Integra</title>
                <link rel="canonical" href="http://integraestudio.com.ar" />
            </Helmet>
            <HeroBox key="hero" />
            <Servicios key="Servicios" />
            <Estudio />
            <Proyectos key="proyectos" navigate={props.navigate} />
        </Layout>
    )
}


