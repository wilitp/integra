import React from 'react';
import classes from './Proyectos.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import Thumbnail from '../Thumbnail/Thumbnail';
import Button from '../Button/Button';
export default (props) => {

  const data = useStaticQuery(graphql`
    {
      obras: allContentfulObra(limit: 4){
        nodes{
          titulo,
          slug,
          fotoPrincipal{
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    
  `)


  const imagenesFormateadas = data.obras.nodes.map(obra => {
    return <Thumbnail title={obra.titulo} key={obra.slug} image={obra.fotoPrincipal.fluid} clicked={() => props.navigate(`/proyectos/${obra.slug}`)}/>
  })

  const breakpointColumnsObj = {
    default: 2,
    500: 1
  }

  return (
    <div className="container">
      <div className={classes.Proyectos}>
        <h1>Proyectos</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >{imagenesFormateadas}</Masonry>
        <div style={{marginTop: "50px"}}>
          <Button link={"/proyectos/"} centered>Ver todos los proyectos</Button>
        </div>
      </div>
    </div>
  )
}

