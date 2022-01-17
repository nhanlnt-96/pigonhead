import React from "react";
import {Box, Container} from "@mui/material";

import "./TitleComp.scss";

const TitleComp = ({title}) => {
  return (
    <Container className="title-comp" maxWidth>
      <Container className="title-comp-container">
        <Box data-aos="zoom-in" className="title-box-container">
          <h6 className="title">{title}</h6>
        </Box>
      </Container>
    </Container>
  );
};

export default TitleComp;