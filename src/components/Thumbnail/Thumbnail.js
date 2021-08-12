import React from 'react'
import * as classes from './Thumbnail.module.scss';
import Img from 'gatsby-image';
const Obra = (props) => {
    return (
        <div className={classes.Thumbnail} >
            <div className={classes.overlay} onClick={() => props.clicked()}>
                <strong>
                    {props.title}
                </strong>
            </div>
            <Img fluid={props.image} />
        </div>
    )
}

export default Obra
