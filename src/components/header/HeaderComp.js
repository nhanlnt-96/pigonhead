import React from "react";
import ElevationScroll from "./components/ElevationScroll";
import PropTypes from "prop-types";
import {AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar} from "@mui/material";
import {headerMenu} from "../../configs/headerMenu";

import "./HeaderComp.scss";

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const HeaderComp = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <ElevationScroll {...props}>
      <AppBar sx={{backgroundColor: "transparent"}} className="header-comp">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/*<Typography*/}
            {/*  variant="h6"*/}
            {/*  noWrap*/}
            {/*  component="div"*/}
            {/*  sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}*/}
            {/*>*/}
            {/*  LOGO*/}
            {/*</Typography>*/}
            <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className={`header-comp-toggle ${anchorElNav && "active"}`}
                component={"div"}
              >
                <span className="toggle-line"/>
                <span className="toggle-line"/>
                <span className="toggle-line"/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: "block", md: "none", xl: "none"},
                  width: "100%"
                }}
              >
                {headerMenu.map((val, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link sx={{textDecoration: "none", color: "#000"}} href={val.path}>{val.label}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/*<Typography*/}
            {/*  variant="h6"*/}
            {/*  noWrap*/}
            {/*  component="div"*/}
            {/*  sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}*/}
            {/*>*/}
            {/*  LOGO*/}
            {/*</Typography>*/}
            <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}} className="header-comp-menu">
              {headerMenu.map((val, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{my: 2, display: "block"}}
                  // component={Link}
                  href={val.path}
                  className="header-comp-menu-item"
                >
                  {val.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default HeaderComp;