import React from 'react';
import classes from './Estudio.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Estudio = () => {
  const data = useStaticQuery(graphql`
    {
      foto: file(name: {eq: "arquitecta"}){
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    } 
  `)

  return (
    <div className={classes.Estudio}>
      <div className="container">
        <h1>Estudio</h1>
        <div className={classes.Cards}>
          <div className={classes.card}>
            <Img fluid={data.foto.childImageSharp.fluid} />

            <div className={classes.description}>
              <h4>Vivianda Tobar</h4>
              <p>Arquitecta</p>
            </div>

            <div className={classes.icons}>
              <div>
                <Icon icon={faLinkedinIn} />
              </div>
              <div>
                <Icon icon={faFacebookF}/>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Estudio
