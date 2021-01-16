import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import tokomonLogo from "../assets/images/tokomon.png";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  border-bottom: 4px solid #d3d3d3;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0px 35px;
  @media screen and (max-width: 560px) {
    flex-direction: column;
    justify-content: unset;
    height: 150px;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Menu = styled.div`
  @media screen and (max-width: 560px) {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <div>
          <Logo src={tokomonLogo} />
        </div>
        <Menu>
          <Link to={{ pathname: `/tokomon` }} className="nes-badge">
            <span className="is-warning">Main Menu</span>
          </Link>
          <Link to={{ pathname: `/my-tokomon` }} className="nes-badge">
            <span className="is-warning">My Tokomon</span>
          </Link>
        </Menu>
      </Header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
