import React from 'react'
import classes from './HeroBox.module.scss';
import { Link } from 'gatsby';
import Button from '../Button/Button';
const HeroBox = (props) => {
  return (
    <div className={classes.HeroBox}>
      <main>
        <h1>Estudio Integra</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis dolor ullam rerum harum ea pariatur perferendis officia,
          minus suscipit voluptatum!</span>
          <Button link={'/proyectos/'} type={"successOutline"}>Ver Proyectos</Button>
          <Button link={'/contacto'} type={"secondaryOutline"}>Contacto</Button>
      </main>

    </div>
  )
}

export default HeroBox
