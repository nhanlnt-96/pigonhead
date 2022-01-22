import React from "react";
import { Container } from "@mui/material";
import RoadmapFooterImg from "../../assets/imgs/evenFooterImg.png";
import { roadmapData } from "../../configs/roadmapData";
import TitleComp from "../title/TitleComp";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineFileDownloadDone } from "react-icons/all";

import "./RoadmapComp.scss";

const RoadmapComp = () => {
  return (
    <Container className="roadmap-comp comp-height" maxWidth>
      <Container className="roadmap-comp-container">
        <TitleComp title={"ROADMAP"} />
        <VerticalTimeline className="roadmap-comp-content">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#45aaf2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #45aaf2" }}
            iconStyle={{ backgroundColor: "#45aaf2", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">10% Website Launch and Ready to Hatch</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            <p>- One lucky winner will receive 1 Ethereum, along with a new accessory to create a
              unique look to their existing Pigeonhead.</p>
            <p>- An additional 5 token holders will also receive a new or different accessory
              airdropped to them to add to their collection.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#45aaf2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #45aaf2" }}
            iconStyle={{ backgroundColor: "#45aaf2", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">25% Pre-Launch Giveaways</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            <p>- Keep up with the flock in the Discord channel and the Pigeonheads with the most engagement will be eligible to receive 2 Ethereum rewards.</p>
            <p>- 5 new item will also drop to 5 lucky token holders to accessorize their look.</p>
            <p>- We will announce at least 20 giveaways, with winners selected from participants in our Discord and Twitter channels. The winners will be rewarded with their own Pigeonhead NFT on the Launch day.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#45aaf2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #45aaf2" }}
            iconStyle={{ backgroundColor: "#45aaf2", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">50% Lets show some appreciation</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            <p>To celebrate our halfway mark, and show our appreciation, we will be making a $20,000
              charity donation to <i style={{fontStyle:'italic'}}>Its from the Sole</i>, a non-for-profit organization focused on collecting,
              refurbishing and giving away shoes to the homeless in New York City and other
              metropolitan areas, as well as a $20,000 donation to <i style={{fontStyle:'italic'}}>InspiraBag</i>, a community driven
              organization focused on the vitality of educational preparedness for all children.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#45aaf2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #45aaf2" }}
            iconStyle={{ backgroundColor: "#45aaf2", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">75% One-of-one Merchandise</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            <p>- Our merchandise store will be opened to the Pigeonhead community, where you’ll be
able to purchase your own NFT design on hoodies, hats and other items. A portion of
the sales will go to the community wallet.</p>
            <p>- Community wallet launch.</p>
            <p>- Round trip for two to New York City and sneaker shopping spree at Stadium Goods
for holders that own 5 pigeons or more.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#45aaf2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #45aaf2" }}
            iconStyle={{ backgroundColor: "#45aaf2", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">100% We’ve arrived!</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            <p>Pigeonhead Collection launches with limited drops each week.</p>
            <p>- We will be releasing new items weekly to add to your Pigeonhead closet for you to
flex or resell it on Opensea.</p>
            <p>- Our giveaways intensify with the first cold wallet drop in New York City, including one-of-a-kind items, up to 5 Ethereum and much more.</p>
            <p>- Geodrops are unlocked. Murals with embedded AR will be unveiled in New York, LA and Miami, which will be auctioned as NFTs.</p>
            <p>- Join us on Discord, Twitter and Instagram!</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<MdOutlineFileDownloadDone />}
          />
        </VerticalTimeline>
      </Container>
      {/*<div className="footer-img">*/}
      {/*  <img src={RoadmapFooterImg} alt="pigeonhead" className="footer-img-item"/>*/}
      {/*</div>*/}
    </Container>
  );
};

export default RoadmapComp;