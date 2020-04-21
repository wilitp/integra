import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Thumbnail from '../Thumbnail/Thumbnail';
import classes from './Gallery.module.scss';
import foto from '../../static/assets/fondo_hero.jpg'
export default (props) => {



  // const obras = data.allStrapiObra.nodes.map(node => {
  //   const image = <Img fixed={node.foto.childImageSharp.fixed} />
  //   return <Thumbnail
  //     key={node.slug}
  //     image={image}
  //     title={node.titulo}
  //     link={`/obra/${node.slug}`} />
  // });


  const imagenesFormateadas = props.images.map(img => {
    return <div className={classes.image}><Img fluid={img}/></div>
  })



  return (
      <div className={classes.Gallery}>
        {/* <div className={classes.image}><img src={foto} alt="" /></div>
        <div className={classes.image}><img src={foto} alt="" /></div>
        <div className={classes.image}><img src={foto} alt="" /></div>
        <div className={classes.image}><img src={foto} alt="" /></div>
        <div className={classes.image}><img src={foto} alt="" /></div> */}

      {imagenesFormateadas}
        




    </div>

  )
}
