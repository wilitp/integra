import React, { useState, useRef } from "react";
import * as classes from "./Carousel.module.scss";
import useWidth from "../../hooks/useWidth";
import Img from "gatsby-image";
import useCarouselSwipe from "./useCarouselSwipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = (props) => {
  const width = useWidth();
  let photosHeight = 80;
  if (width < 1360 && width > 900) {
    photosHeight = 80;
  } else if (width < 900 && width > 500) {
    photosHeight = 50;
  } else if (width < 500) {
    photosHeight = 50;
  }

  const { index } = props;
  const initialState = index != null ? index * -100 : 0;
  const [x, setX] = useState(initialState);
  const carouselRef = useRef(null);

  const slides = props.imagenes.map((img) => {
    return (
      <div
        className={classes.slide}
        key={img.src}
        style={{ transform: `translateX(${x}%)` }}
      >
        <div
          style={{
            height: `${photosHeight}vh`,
            margin: "auto",
            width: `${photosHeight * img.aspectRatio}vh`,
          }}
        >
          <Img draggable={false} fluid={img} />
        </div>
      </div>
    );
  });
  const previous = () => {
    x < 0 ? setX(x + 100) : setX((slides.length - 1) * -100);
  };

  const next = () => {
    x !== (slides.length - 1) * -100 ? setX(x - 100) : setX(0);
  };

  useCarouselSwipe(carouselRef, next, previous);

  return (
    <div className={classes.Carousel} ref={carouselRef}>
      {slides}
      <button className={classes.previousButton} onClick={previous}>
        <FontAwesomeIcon size="xs" icon={faChevronLeft} />
      </button>
      <button className={classes.nextButton} onClick={next}>
        <FontAwesomeIcon size="xs" icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
