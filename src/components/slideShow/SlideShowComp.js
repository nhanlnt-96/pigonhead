import React, {useLayoutEffect, useState} from "react";
import {Slide} from "react-slideshow-image";
import {collectionData} from "../../configs/collectionData";
import {Container} from "react-bootstrap";

import "react-slideshow-image/dist/styles.css";
import "./SlideShowComp.scss";

const SlideShowComp = () => {
  const properties = {
    duration: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
    pauseOnHover: false,
  };
  return (
    <Container className="slideshow-comp" fluid>
      <Slide {...properties}>
        {
          collectionData.map((val, index) => (
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