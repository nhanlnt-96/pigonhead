import React from "react";
import {CssBaseline, Fab} from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import {BiUpArrow} from "react-icons/all";
import PropTypes from "prop-types";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import RoadmapComp from "../roadmap/RoadmapComp";

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
      <div id="roadmap">
        <RoadmapComp/>
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