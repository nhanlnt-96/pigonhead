import React from "react";
import {Container} from "@mui/material";
import TeamCompImg from "../../assets/imgs/oddFooterImg.png";
import {teamData} from "../../configs/teamData";
import TitleComp from "../title/TitleComp";

import "./TeamComp.scss";

const TeamComp = () => {
  return (
    <Container className="team-comp comp-height" maxWidth>
      <Container className="team-comp-container">
        <TitleComp title={"TEAM"}/>
        <div className="team-comp-content">
          {
            teamData.map((val, index) => (
              <div data-aos="zoom-in" key={index} className="team-item">
                <div className="team-ava">
                  <img src={val.ava} alt="pigeonhead-team"/>
                </div>
                <div className="team-info">
                  <div className="team-name">
                    <p>{val.name}</p>
                  </div>
                  <div className="team-position">
                    <p>{val.position}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
      {/*<div className="footer-img">*/}
      {/*  <img src={TeamCompImg} alt="pigeonhead" className="footer-img-item"/>*/}
      {/*</div>*/}
    </Container>
  );
};

export default TeamComp;