import React from "react";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import CollectionComp from "../collection/CollectionComp";
import FAQComp from "../faq/FAQComp";
import TeamComp from "../team/TeamComp";
import {Container, Row} from "react-bootstrap";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      <Row id="collection">
        <CollectionComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
      <Row id="faq">
        <FAQComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;