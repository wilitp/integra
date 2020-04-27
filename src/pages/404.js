import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';

export default () => {
  return (
    <Layout notIndex>
      <h1>Error 404 | La página ingresada no existe</h1>
      <p style={{marginBottom: "300px"}}>Volver al <Link to="/">Inicio</Link></p>
    </Layout>
  )
}

