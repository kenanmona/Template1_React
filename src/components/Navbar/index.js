import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Content,
  FaBars,
  ListItem,
  Logo,
  LogoText,
  NavbarSection,
  UlList,
} from "./style";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <NavbarSection>
      <div className="container">
        <Content>
          <Logo>
            <LogoText>Ultra Profiles</LogoText>
          </Logo>

          <UlList
            onClick={() => setToggle(false)}
            className={toggle ? "active" : ""}
          >
            <ListItem>
              <Link onClick={() => setToggle(false)} to="/">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Anchor onClick={() => setToggle(false)} href="#">
                Work
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor onClick={() => setToggle(false)} href="#">
                Portfolio
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor onClick={() => setToggle(false)} href="#">
                Resume
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor onClick={() => setToggle(false)} href="#">
                About
              </Anchor>
            </ListItem>
            <ListItem>
              <Link
                onClick={() => setToggle(false)}
                className="Anchor"
                to="/contact"
              >
                Contact
              </Link>
            </ListItem>
          </UlList>
          <FaBars onClick={toggleHandler}>
            <i className={toggle ? "fa fa-times fa-lg" : ""}></i>
            <i className={toggle ? "" : "fa fa-bars fa-lg"}></i>
          </FaBars>
        </Content>
      </div>
    </NavbarSection>
  );
}
