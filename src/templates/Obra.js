import React, { useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import { graphql, Link } from "gatsby";
import Carousel from "../components/Carousel/Carousel";
import Img from "gatsby-image";
import * as classes from "./Obra.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import Masonry from "react-masonry-css";

export const query = graphql`
  query ($slug: String!) {
    obra: contentfulObra(slug: { eq: $slug }) {
      titulo
      cuerpo {
        raw
      }
      slug
      plano {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      fotos {
        gatsbyImageData(placeholder: BLURRED)
        fluid(maxWidth: 3080, quality: 70) {
          aspectRatio
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const breakpointColumnsObj = {
  default: 2,
  500: 1,
};
const Obra = (props) => {
  const imagenes = props.data.obra.fotos.map((img) => img.fluid);

  // Either null or current index
  const [carouselState, setCarouselState] = useState(null);

  const imagenesFormateadas = props.data.obra.fotos.map((img, index) => {
    return (
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setCarouselState(index)}
      >
        <GatsbyImage image={img.gatsbyImageData} />
      </div>
    );
  });

  const carouselRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === carouselRef.current) {
      setCarouselState(null);
    }
  };

  return (
    <Layout title={`${props.data.obra.titulo} | Estudio Integra`} notIndex>
      <React.Fragment>
        <div className="container">
          <Link
            to="/proyectos/"
            style={{
              width: "fit-content",
              textDecoration: "none",
              color: "black",
              display: "block",
              marginBottom: "20px",
            }}
          >
            <Icon icon={faChevronLeft} /> Volver
          </Link>
          <h2>{`${props.data.obra.titulo} - Fotos`}</h2>
          {carouselState != null && (
            <section
              ref={carouselRef}
              className={`${classes.Carousel} container`}
              onClick={handleOverlayClick}
            >
              <Carousel index={carouselState} imagenes={imagenes} />
            </section>
          )}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imagenesFormateadas}
          </Masonry>

          <div>
            <div className={classes.description}>
              {documentToReactComponents(
                JSON.parse(props.data.obra.cuerpo.raw)
              )}
            </div>
            {props.data.obra.plano ? (
              <div className={classes.plano}>
                <Img fluid={props.data.obra.plano.fluid} />
                <p>{props.data.obra.plano.title}</p>
              </div>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Obra;
