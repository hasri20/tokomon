import React from "react";
import styled from "@emotion/styled";

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
  background-color: #fefefe;
  margin: auto;
  width: fit-content;
  height: fit-content;
`;

const FailedCatchModal = ({ handleClose }) => {
  return (
    <ModalContainer>
      <Modal className="nes-dialog is-rounded">
        <p className="title">failed to catch</p>
        <p>try again!</p>
        <button className="nes-btn is-primary" onClick={handleClose}>
          Ok
        </button>
      </Modal>
    </ModalContainer>
  );
};

export default FailedCatchModal;
