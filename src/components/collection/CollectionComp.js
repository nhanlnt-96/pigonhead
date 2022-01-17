import React from "react";
import {Container} from "@mui/material";
import CollectionFooterImg from "../../assets/imgs/oddFooterImg.png";
import TitleComp from "../title/TitleComp";

import "./CollectionComp.scss";
import {collectionData} from "../../configs/collectionData";

const CollectionComp = () => {
  return (
    <Container className="collection-comp comp-after-footer-img" maxWidth>
      <Container className="collection-comp-container">
        <TitleComp title={"COLLECTION"}/>
        <div className="collection-comp-content">
          {
            collectionData.map((val, index) => (
              <div className="collection-item">
                <img data-aos="zoom-in" src={val} alt="pigeonhead-collection"/>
              </div>
            ))
          }
        </div>
      </Container>
      <div className="footer-img">
        <img src={CollectionFooterImg} alt="pigeonhead" className="footer-img-item"/>
      </div>
    </Container>
  );
};

export default CollectionComp;