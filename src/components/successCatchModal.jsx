import React, { useState } from "react";
import styled from "@emotion/styled";
import isNicknameExist from "../helpers/isNicknameExist";

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

const SuccessCatchModal = ({ tokomonType, closeModal, catchTokomon }) => {
  const [nicknameInput, setNicknameInput] = useState("");
  const [isNicknameTaken, setIsNicknameTaken] = useState(false);

  const handleNicknameInput = (e) => {
    setNicknameInput(e.target.value);
  };

  const handleSubmit = () => {
    if (nicknameInput === "") {
      return;
    }

    if (isNicknameExist(nicknameInput)) {
      setIsNicknameTaken(true);
      return;
    }
    catchTokomon({ nickname: nicknameInput, tokomonType: tokomonType });
    closeModal();
  };

  return (
    <ModalContainer>
      <Modal className="nes-dialog is-rounded">
        <p className="title">catch succeeded</p>
        <div className="nes-field">
          <label htmlFor="name_field">nickname</label>
          <input
            type="text"
            id="name_field"
            className="nes-input"
            value={nicknameInput}
            onChange={handleNicknameInput}
          />
          {isNicknameTaken && (
            <p className="nes-text is-error">Nickname already taken</p>
          )}
        </div>
        <menu className="dialog-menu">
          <button className="nes-btn is-error" onClick={closeModal}>
            Cancel
          </button>
          <button
            className={
              nicknameInput === ""
                ? "nes-btn is-success is-disabled"
                : "nes-btn is-success"
            }
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </menu>
      </Modal>
    </ModalContainer>
  );
};

export default SuccessCatchModal;
