import React from "react";
import AboutCompImg from "../../assets/imgs/pigeonheadeSkateboard.png";
import {Col, Container, Row} from "react-bootstrap";

import "./AboutComp.scss";

const AboutComp = () => {
  return (
    <Container className="about-comp comp-height" fluid>
      <Container className="about-comp-container">
        <Row container className="about-comp-content">
          <Col lg={4} md={4} sm={12} className="about-comp-left">
            <img src={AboutCompImg} alt="pigeonhead"/>
          </Col>
          <Col lg={8} md={8} sm={12} className="about-comp-right">
            <div className="title-container">
              <h2 className="title">Welcome to the Pigeonhead Flock</h2>
            </div>
            <div className="content-container">
              <p className="content">The flock consists of 9,900 unique Pigeonheads cooing their
                way into the Ethereum
                blockchain. Emerging from the streets of New York City, Pigeonheads will grant you exclusive access to
                our online community and make you eligible for some exciting rewards along the way. Our goal is to
                create the most stylish NFT collection possible that will make you stand out in the Metaverse.</p>
              <p className="content">Once the flock has sold out, new items will be given away
                weekly to select token
                holders, which can be used to create a new look for your NFT or resell on Opensea. Fashion events will
                be held in New York, LA and Miami with more cities to come. All airdrops will be limited and there will
                be no re-releases.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComp;