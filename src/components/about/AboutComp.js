import React from "react";
import {Container, Grid} from "@mui/material";
import AboutCompImg from "../../assets/imgs/pigeonheadeSkateboard.png";
import AboutCompBg from "../../assets/imgs/evenFooterImg.png";

import "./AboutComp.scss";

const AboutComp = () => {
  return (
    <Container className="about-comp comp-height" maxWidth>
      <Container className="about-comp-container">
        <Grid container className="about-comp-content" spacing={5}>
          <Grid lg={4} md={4} sm={12} className="about-comp-left" item>
            <img data-aos="zoom-in" src={AboutCompImg} alt="pigeonhead"/>
          </Grid>
          <Grid lg={8} md={8} sm={12} className="about-comp-right" item>
            <div data-aos="fade-down" className="title-container">
              <h2 className="title">Welcome to the Pigeonhead Flock</h2>
            </div>
            <div className="content-container">
              <p data-aos="fade-left" className="content">The flock consists of 9,900 unique Pigeonheads cooing their
                way into the Ethereum
                blockchain. Emerging from the streets of New York City, Pigeonheads will grant you exclusive access to
                our online community and make you eligible for some exciting rewards along the way. Our goal is to
                create the most stylish NFT collection possible that will make you stand out in the Metaverse.</p>
              <p data-aos="fade-right" className="content">Once the flock has sold out, new items will be given away
                weekly to select token
                holders, which can be used to create a new look for your NFT or resell on Opensea. Fashion events will
                be held in New York, LA and Miami with more cities to come. All airdrops will be limited and there will
                be no re-releases.</p>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/*<div className="footer-img">*/}
      {/*  <img src={AboutCompBg} alt="pigeonhead" className="footer-img-item"/>*/}
      {/*</div>*/}
    </Container>
  );
};

export default AboutComp;