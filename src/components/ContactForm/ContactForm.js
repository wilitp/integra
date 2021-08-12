import React from 'react';
import * as classes from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={classes.ContactForm}>
      <form action="/" method="POST" name="Contact" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact" />

        <div className={classes.field}>
          <label>Nombre</label>
          <input name="nombre" type="text" />
        </div>

        <div className={classes.inlineFields}>
          <div className={classes.field}>
            <label>Email</label>
            <input name="email" type="email" />
          </div>
          <div className={classes.field}>
            <label>Teléfono (opcional)</label>
            <input name="telefono" type="text" />
          </div>
        </div>



        <div className={classes.field}>
          <label>Asunto</label>
          <input name="asunto" type="text" />
        </div>
        <div className={classes.field}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}



export default ContactForm