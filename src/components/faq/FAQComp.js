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
  const [showAccordion, setShowAccordion] = useState(false);
  const [accordionShow, setAccordionShow] = useState(null);
  const onExpandAccordionClick = (accordionIndex) => {
    setShowAccordion(!showAccordion);
    accordionShow ? setAccordionShow(null) : setAccordionShow(accordionIndex);
  };
  return (
    <Container className="faq-comp comp-after-footer-img" maxWidth>
      <Container className="faq-comp-container">
        <TitleComp title={"FAQ"}/>
        {
          faqData.map((val, index) => (
            <Accordion key={index} onClick={() => onExpandAccordionClick(index)}>
              <AccordionSummary
                expandIcon={<div
                  className={`accordion-toggle ${(showAccordion && index === accordionShow) && "accordion-toggle-active"}`}>
                  <span className="accordion-toggle-line"/>
                  <span className="accordion-toggle-line"/>
                </div>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{val.question}</Typography>
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
