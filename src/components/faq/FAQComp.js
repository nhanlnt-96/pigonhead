import * as React from "react";
import TitleComp from "../title/TitleComp";
import {faqData} from "../../configs/faqData";
import {Accordion, Container} from "react-bootstrap";

import "./FAQComp.scss";

const FAQComp = () => {
  return (
    <Container className="faq-comp comp-height" fluid>
      <Container className="faq-comp-container">
        <TitleComp title={"FAQ"}/>
        <Accordion>
          {
            faqData.map((val, index) => (
              <Accordion.Item eventKey={`${index}`}>
                <Accordion.Header>{val.question}</Accordion.Header>
                <Accordion.Body>
                  {
                    val.answer.map((item, itemKey) => (
                      <p key={index} className="answer-content">{item}</p>
                    ))
                  }
                </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </Container>
    </Container>
  );
};

export default FAQComp;
