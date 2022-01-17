import React from "react";
import {Container} from "@mui/material";
import RoadmapFooterImg from "../../assets/imgs/evenFooterImg.png";
import {roadmapData} from "../../configs/roadmapData";
import TitleComp from "../title/TitleComp";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdOutlineFileDownloadDone} from "react-icons/all";

import "./RoadmapComp.scss";

const RoadmapComp = () => {
  return (
    <Container className="roadmap-comp comp-after-footer-img" maxWidth>
      <Container className="roadmap-comp-container">
        <TitleComp title={"ROADMAP"}/>
        <VerticalTimeline className="roadmap-comp-content">
          {
            roadmapData.map((val, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{background: "#45aaf2", color: "#fff"}}
                contentArrowStyle={{borderRight: "7px solid #45aaf2"}}
                iconStyle={{backgroundColor: "#45aaf2", color: "#fff"}}
              >
                <h3 className="vertical-timeline-element-title">{val.percent}</h3>
                {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
                {
                  val.content.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
                  ))
                }
              </VerticalTimelineElement>
            
            ))
          }
          <VerticalTimelineElement
            iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
            icon={<MdOutlineFileDownloadDone/>}
          />
        </VerticalTimeline>
      </Container>
      <div className="footer-img">
        <img src={RoadmapFooterImg} alt="pigeonhead" className="footer-img-item"/>
      </div>
    </Container>
  );
};

export default RoadmapComp;