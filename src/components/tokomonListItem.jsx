import React from "react";
import styled from "@emotion/styled";

const ListItem = styled.div`
  margin: 20px 35px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const TokomonName = styled.div`
  margin: 0;
`;

const TokomonListItem = ({ name, navigate }) => {
  const count = localStorage.getItem(name) ?? 0;

  return (
    <ListItem
      className="nes-container is-rounded nes-pointer"
      onClick={() => navigate(`/tokomon/${name}`)}
    >
      <TokomonName>{name}</TokomonName>
      <p>Owned {count}</p>
    </ListItem>
  );
};

export default TokomonListItem;
