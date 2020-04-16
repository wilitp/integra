import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Thumbnail from '../Thumbnail/Thumbnail';
import classes from './Gallery.module.scss';

export default () => {

  const data = useStaticQuery(graphql`
    {
        allStrapiObra{
            nodes{
                titulo,
                slug,
                foto{
                    childImageSharp{
                        fixed(width:200, height: 125){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
    `)

  const obras = data.allStrapiObra.nodes.map(node => {
    const image = <Img fixed={node.foto.childImageSharp.fixed} />
    return <Thumbnail
      key={node.slug}
      image={image}
      title={node.titulo}
      link={`/obra/${node.slug}`} />
  });

  return (
    <div className={classes.Gallery}>
      {obras}
    </div>
  )
}
