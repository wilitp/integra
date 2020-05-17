import React from 'react';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={classes.ContactForm}>
      <form action="/" method="POST" name="Contact" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact" />
        <div>
          <label>Nombre</label>
          <input name="nombre" type="text" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Teléfono (opcional)</label>
          <input name="telefono" type="text" />
        </div>
        <div >
          <button centered type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}



export default ContactForm