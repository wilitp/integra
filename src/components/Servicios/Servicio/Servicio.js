import React from 'react';
import classes from './Servicio.module.scss';

const Servicio = (props) => {
  return (
    <div className={classes.Servicio}>
      <div className={classes.icon}>
        {props.icon}
      </div>
      <h3>{props.title}</h3>
      <div className={classes.description}>
        <p>{props.description}</p>

      </div>

    </div>
  )
}

export default Servicio
