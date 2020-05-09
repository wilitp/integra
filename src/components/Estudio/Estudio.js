import React from 'react';
import classes from './Estudio.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
              <h4>Viviada Tobar</h4>
              <p>Arquitecta</p>
            </div>

            <div className={classes.icons}>
              <a href="https://www.linkedin.com/in/viviana-tobar-416848124/" target="blank">
                <Icon icon={faLinkedinIn} size="lg" />
              </a>
              <a href="https://www.facebook.com/viviana.tobar.35" target="blank">
                <Icon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://www.instagram.com/viviliztobar/?hl=es" target="blank">
                <Icon icon={faInstagram} size="lg" />
              </a>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default Estudio
