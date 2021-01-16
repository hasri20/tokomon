import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { get } from "../api/apiUtils";
import { TOKOMON } from "../constants/baseUrl";

const ListItem = styled.div`
  margin: 20px 35px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 560px) {
    flex-direction: column;
    justify-content: unset;
  }
`;

const TokomonProfile = styled.div`
  display: flex;
  align-items: center;
`;

const TokomonImage = styled.img`
  height: 120px;
`;

const TokomonName = styled.div`
  margin-left: 20px;
`;

const MyTokomonListItem = ({ name, releaseTokomon }) => {
  const [imageUrl, setImageUrl] = useState("");

  const tokomonType = localStorage.getItem(name);

  const fetchTokomonImg = () => {
    get(`${TOKOMON}/${tokomonType}`)
      .then((response) => {
        const img =
          response["data"]["sprites"]["other"]["official-artwork"][
            "front_default"
          ];

        setImageUrl(img);
      })
      .catch((error) => {});
  };

  useEffect(fetchTokomonImg, []);

  return (
    <ListItem className="nes-container is-rounded">
      <TokomonProfile>
        <TokomonImage alt={tokomonType} src={imageUrl}></TokomonImage>
        <TokomonName>{name}</TokomonName>
      </TokomonProfile>
      <div>
        <button
          type="button"
          className="nes-btn is-error"
          onClick={() =>
            releaseTokomon({
              nickname: name,
              tokomonType: tokomonType,
            })
          }
        >
          Release
        </button>
      </div>
    </ListItem>
  );
};

export default MyTokomonListItem;
