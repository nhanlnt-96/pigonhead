import React from "react";
import {Container} from "@mui/material";
import {teamData} from "../../configs/teamData";
import TitleComp from "../title/TitleComp";

import "./TeamComp.scss";
import {SiDiscord, SiInstagram, SiTwitter} from "react-icons/all";

const TeamComp = () => {
  return (
    <Container className="team-comp comp-height" maxWidth>
      <Container className="team-comp-container">
        <TitleComp title={"TEAM"}/>
        <div className="team-comp-content">
          {
            teamData.map((val, index) => (
              <div key={index} className="team-item">
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
        <div className="social-container">
          <a href="https://instagram.com/pigeonheadsnft" className="social-item" target="_blank">
            <SiInstagram/>
          </a>
          <a href="https://twitter.com/pigeonheadsnft" className="social-item" target="_blank">
            <SiTwitter/>
          </a>
          <a href="https://discord.gg/RvPaQ7Fs" className="social-item" target="_blank">
            <SiDiscord/>
          </a>
        </div>
      </Container>
    </Container>
  );
};

export default TeamComp;