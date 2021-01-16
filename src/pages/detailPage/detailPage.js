import React, { useState, useEffect } from "react";
import FailedModal from "../../components/failedCatchModal";
import SuccessModal from "../../containers/successCatchModalContainer";
import { get } from "../../api/apiUtils";
import { TOKOMON } from "../../constants/baseUrl";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Content = styled.section`
  margin-top: 45px;
  width: 400px;
`;

const DetailPage = ({ name, imageUrl, types, moves, storeTokomonData }) => {
  const [tokomonStatus, setTokomonStatus] = useState("loading");
  const [modalToShow, setModalToShow] = useState(false);

  const fetchTokomonData = async () => {
    try {
      const response = await get(`${TOKOMON}/${name}`);
      setTokomonStatus("found");
      return response.data;
    } catch (error) {
      setTokomonStatus("error");
    }
  };

  const initializeTokomonData = async () => {
    try {
      const data = await fetchTokomonData();
      const name = data["name"];
      const imageUrl =
        data["sprites"]["other"]["official-artwork"]["front_default"];
      const types = data["types"].map((data) => {
        return data.type.name;
      });

      const moves = data["moves"].map((data) => {
        return data.move.name;
      });
      storeTokomonData({ name, imageUrl, types, moves });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCatchButton = () => {
    if (Math.random() < 0.5) {
      setModalToShow("success-modal");
    } else {
      setModalToShow("failed-modal");
    }
  };

  const closeModal = () => {
    setModalToShow(false);
  };

  useEffect(() => {
    initializeTokomonData();
  }, []);

  return (
    <Container>
      {tokomonStatus === "loading" ? (
        <p>Loading</p>
      ) : tokomonStatus === "error" ? (
        <p>Tokomon not found</p>
      ) : (
        <>
          <img src={imageUrl} alt={`${name} artwork`} />

          <h1>{name}</h1>

          <div>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={handleCatchButton}
            >
              Catch
            </button>
          </div>
          <Content>
            <Title>Type</Title>
            <ul className="nes-list is-disc">
              {types.map((type, index) => {
                return <li key={index}>{type}</li>;
              })}
            </ul>
          </Content>
          <Content>
            <Title>Moves</Title>
            <ul className="nes-list is-disc">
              {moves.map((move, index) => {
                return <li key={index}>{move}</li>;
              })}
            </ul>
          </Content>
          {modalToShow === "success-modal" && (
            <SuccessModal closeModal={closeModal} tokomonType={name} />
          )}
          {modalToShow === "failed-modal" && (
            <FailedModal handleClose={closeModal} />
          )}
        </>
      )}
    </Container>
  );
};

export default DetailPage;
