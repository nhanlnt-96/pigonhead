import React from "react";
import {Container} from "@mui/material";
import TitleComp from "../title/TitleComp";
import {collectionData} from "../../configs/collectionData";
import SlideShowComp from "../slideShow/SlideShowComp";

import "./CollectionComp.scss";

const CollectionComp = () => {
  return (
    <Container className="collection-comp comp-height" maxWidth>
      <Container className="collection-comp-container">
        <TitleComp title={"COLLECTION"}/>
        <div className="slider-container">
          <SlideShowComp slideImages={collectionData}/>
        </div>
        {/*<div style={{margin: "10px 0"}} className="custom-slide">*/}
        {/*  <SlideShowComp slideImages={collectionData}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <SlideShowComp slideImages={collectionData}/>*/}
        {/*</div>*/}
      </Container>
    </Container>
  );
};

export default CollectionComp;