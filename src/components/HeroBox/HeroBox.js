import React from 'react';
import classes from './HeroBox.module.scss';
import { Link } from 'gatsby';
import Button from '../Button/Button';
import useWidth from '../../hooks/useWidth';





const HeroBox = (props) => {

  const width = useWidth()

  return (
    <div className={classes.HeroBox}>
      <main className={width < 620 ? classes.mobile : null}>
        <h1>Estudio Integra</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis dolor ullam rerum harum ea pariatur perferendis officia,
        minus suscipit voluptatum!
          </span>
        {width > 620 ? <Button link={'/proyectos/'} type={"successOutline"}>Ver Proyectos</Button> : null}
        <Button centered={width < 620} link={'/contacto'} type={"secondaryOutline"}>Contacto</Button>
      </main>

    </div>
  )
}



export default HeroBox
