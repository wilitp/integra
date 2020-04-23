import React, { useState, useEffect } from 'react'
import classes from './HeroBox.module.scss';
import { Link } from 'gatsby';
import Button from '../Button/Button';
const HeroBox = (props) => {

  const [width, setWidth] = useState(1920);

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    }
  })
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
