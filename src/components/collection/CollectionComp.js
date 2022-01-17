import React from "react";
import {Container} from "@mui/material";
import CollectionFooterImg from "../../assets/imgs/oddFooterImg.png";
import TitleComp from "../title/TitleComp";
import {collectionData} from "../../configs/collectionData";
import SlideShowComp from "../slideShow/SlideShowComp";

import "./CollectionComp.scss";

const CollectionComp = () => {
  return (
    <Container className="collection-comp comp-height" maxWidth>
      <Container className="collection-comp-container">
        <TitleComp title={"COLLECTION"}/>
        {/*<div className="collection-comp-content">*/}
        {/*  {*/}
        {/*    collectionData.map((val, index) => (*/}
        {/*      <div className="collection-item">*/}
        {/*        <img data-aos="zoom-in" src={val} alt="pigeonhead-collection"/>*/}
        {/*      </div>*/}
        {/*    ))*/}
        {/*  }*/}
        {/*</div>*/}
        <div>
          <SlideShowComp slideImages={collectionData}/>
        </div>
        <div style={{margin: "10px 0"}} className="custom-slide">
          <SlideShowComp slideImages={collectionData}/>
        </div>
        <div>
          <SlideShowComp slideImages={collectionData}/>
        </div>
      </Container>
      {/*<div className="footer-img">*/}
      {/*  <img src={CollectionFooterImg} alt="pigeonhead" className="footer-img-item"/>*/}
      {/*</div>*/}
    </Container>
  );
};

export default CollectionComp;