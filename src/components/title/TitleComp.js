import React from "react";
import {Container} from "react-bootstrap";

import "./TitleComp.scss";

const TitleComp = ({title}) => {
  return (
    <Container className="title-comp" fluid>
      <Container className="title-comp-container">
        <div className="title-box-container">
          <h6 className="title">{title}</h6>
        </div>
      </Container>
    </Container>
  );
};

export default TitleComp;