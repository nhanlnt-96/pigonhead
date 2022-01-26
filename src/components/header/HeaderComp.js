import React, {useEffect, useState} from "react";
import {headerMenu} from "../../configs/headerMenu";
import {Container, Nav, Navbar} from "react-bootstrap";

import "./HeaderComp.scss";

const HeaderComp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleOpenNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };
  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={`header-comp ${offsetY !== 0 && "header-active"}`}>
      <Container className="header-comp-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"
                       className={`header-comp-toggle ${anchorElNav && "active"}`}
                       onClick={handleOpenNavMenu}>
          <span className="toggle-line"/>
          <span className="toggle-line"/>
          <span className="toggle-line"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto header-comp-menu">
            {
              headerMenu.map((val, index) => (
                <Nav.Link key={index} href={val.path} className="menu-item">{val.label}</Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;