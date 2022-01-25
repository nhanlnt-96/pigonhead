import React, {useLayoutEffect, useState} from "react";
import {Container} from "@mui/material";
import {Slide} from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import "./SlideShowComp.scss";

const useWindowSize = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return currentWidth;
};

const SlideShowComp = ({slideImages}) => {
  const screenWidth = useWindowSize();
  const properties = {
    duration: 100,
    slidesToShow: screenWidth < 768 ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
    pauseOnHover: false,
  };
  return (
    <Container className="slideshow-comp" maxWidth>
      <Slide {...properties}>
        {
          slideImages.map((val, index) => (
            <div key={index} className="each-slide">
              <div className="item">
                <img src={val} alt="slide-show"/>
              </div>
            </div>
          ))
        }
      </Slide>
    </Container>
  );
};

export default SlideShowComp;