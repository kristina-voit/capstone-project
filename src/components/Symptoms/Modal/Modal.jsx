import React from "react";
import styled from "styled-components";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <Container>
        {children}
        <a href="javascript:;" className="modal-close" onClick={handleClose}>
          Schließen
        </a>
      </Container>
    </div>
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;
  width: 60%;
  background: #f6f5fb;
  left: 25%;
  top: 30%;
  padding: 20px;
`;
