import React from 'react';
import Layout from '../components/Layout/Layout';
const contacto = () => {
  return (
    <Layout notIndex>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>Contacto - Estudio Integra</title>
        <link rel="canonical" href="http://integraestudio.com.ar/contacto/" />
      </Helmet>
      <h1 style={{ color: "white" }}>Contáctanos</h1>
    </Layout>
  )
}

export default contacto
