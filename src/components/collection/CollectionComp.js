import React from "react";
import TitleComp from "../title/TitleComp";
import SlideShowComp from "../slideShow/SlideShowComp";
import {Container} from "react-bootstrap";

import "./CollectionComp.scss";

const CollectionComp = () => {
  return (
    <Container className="collection-comp comp-height" fluid>
      <Container className="collection-comp-container">
        <TitleComp title={"COLLECTION"}/>
      </Container>
      <div className="slider-container">
        <SlideShowComp/>
      </div>
      <div className="slider-container">
        <SlideShowComp/>
      </div>
      <div className="slider-container">
        <SlideShowComp/>
      </div>
    </Container>
  );
};

export default CollectionComp;