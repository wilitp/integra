import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/ContactForm/ContactForm';
const contacto = () => {
  return (
    <Layout notIndex title="Contacto - Estudio Integra" url="http://integraestudio.com.ar/contacto/">
      <div className="greyContainer">
        <ContactForm />
      </div>

    </Layout>
  )
}

export default contacto
