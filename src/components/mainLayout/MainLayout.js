import React from 'react';
import {AppBar, Box, Container, CssBaseline, Fab, Toolbar, Typography} from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import {BiUpArrow} from "react-icons/all";
import PropTypes from "prop-types";
import HeaderComp from "../header/HeaderComp";

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <HeaderComp/>
      <Toolbar id="back-to-top-anchor"/>
      <Container>
        <Box sx={{my: 2}}>
          {[...new Array(100)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <ScrollToTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <BiUpArrow/>
        </Fab>
      </ScrollToTop>
    </React.Fragment>
  );
};

export default MainLayout;