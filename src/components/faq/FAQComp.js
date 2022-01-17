import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import TitleComp from "../title/TitleComp";

import "./FAQComp.scss";
import {useState} from "react";
import {faqData} from "../../configs/faqData";

const FAQComp = () => {
  return (
    <Container className="faq-comp comp-height" maxWidth>
      <Container className="faq-comp-container">
        <TitleComp title={"FAQ"}/>
        {
          faqData.map((val, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<div
                  className="accordion-toggle">
                  <span className="accordion-toggle-line"/>
                  <span className="accordion-toggle-line"/>
                </div>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{fontWeight: "bold"}}>{val.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {
                  val.answer.map((item, itemIndex) => (
                    <Typography key={itemIndex}>{item}</Typography>
                  ))
                }
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Container>
    </Container>
  );
};

export default FAQComp;
