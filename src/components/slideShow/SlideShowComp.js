import React from "react";
import {Container} from "react-bootstrap";
import {collectionData} from "../../configs/collectionData";

import "./SlideShowComp.scss";

const SlideShowComp = () => {
  return (
    <Container className="slideshow-comp" fluid>
      <div className="slideshow-comp-slider">
        <div className="slideshow-comp-track">
          {
            collectionData.map((val, index) => (
              <div className="slideshow-comp-slide">
                <img key={index} src={val} alt="pigeonhead"/>
              </div>
            ))
          }
          {
            collectionData.map((val, index) => (
              <div className="slideshow-comp-slide">
                <img key={index} src={val} alt="pigeonhead"/>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
};

export default SlideShowComp;