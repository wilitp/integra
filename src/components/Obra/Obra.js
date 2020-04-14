import React from 'react'
import classes from './Obra.module.scss';
import { Link } from 'gatsby';
const Obra = (props) => {
    return (
        <div className={classes.Obra}>
            <Link to={props.link}>
                <h4>{props.title}</h4>
            </Link>
        </div>
    )
}

export default Obra
