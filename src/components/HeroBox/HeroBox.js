import React from 'react'
import classes from './HeroBox.module.scss';

const HeroBox = (props) => {
  return (
    <div className={classes.HeroBox}>
      <main>
        <h1>Estudio Integra</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis dolor ullam rerum harum ea pariatur perferendis officia,
          minus suscipit voluptatum!</span>
      </main>

    </div>
  )
}

export default HeroBox
