import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroBox from '../components/HeroBox/HeroBox';
import Servicios from '../components/Servicios/Servicios';
import Proyectos from '../components/Proyectos/Proyectos';
import Aviso from '../components/Aviso/Aviso';
import Estudio from '../components/Estudio/Estudio';

export default (props) => {

    return (
        <Layout url="http://integraestudio.com.ar" title="Estudio Integra">

            <HeroBox key="hero" />
            <Servicios key="Servicios" />

            <Estudio />
            <Proyectos key="proyectos" navigate={props.navigate} />
        </Layout>
    )
}


