import React, {useLayoutEffect, useState} from "react";
import {Container} from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const settings = {
    infinite: true,
    slidesToShow: screenWidth < 768 ? 3 : 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 200,
    cssEase: "linear",
    pauseOnHover: false
  };
  return (
    <Container className="slideshow-comp" maxWidth>
      <Slider {...settings}>
        {
          slideImages.map((val, index) => (
            <div key={index} className="img-container">
              <img src={val} alt="pigeonheade" style={{width: "100%"}}/>
            </div>
          ))
        }
      </Slider>
    </Container>
  );
};

export default SlideShowComp;