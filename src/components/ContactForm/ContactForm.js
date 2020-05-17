import React from 'react';
import Button from '../Button/Button';
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
          <Button centered type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  )
}



export default ContactForm