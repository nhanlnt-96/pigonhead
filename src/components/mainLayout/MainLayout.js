import React from "react";
import {CssBaseline, Fab} from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import {BiUpArrow} from "react-icons/all";
import PropTypes from "prop-types";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import CollectionComp from "../collection/CollectionComp";
import FAQComp from "../faq/FAQComp";
import TeamComp from "../team/TeamComp";

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <div id="home">
        <BannerComp/>
      </div>
      <div id="about">
        <AboutComp/>
      </div>
      <div id="collection">
        <CollectionComp/>
      </div>
      <div id="roadmap">
        <RoadmapComp/>
      </div>
      <div id="team">
        <TeamComp/>
      </div>
      <div id="faq">
        <FAQComp/>
      </div>
      <ScrollToTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <BiUpArrow/>
        </Fab>
      </ScrollToTop>
    </React.Fragment>
  );
};

export default MainLayout;