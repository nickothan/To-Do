import styled from "styled-components/macro";

export const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const ModalContent = styled.div`
  width: 300px;
  max-width: 80%;
  position: relative;
  background-color: rgb(135 206 235 / 90%);
  margin: 15% auto;
  padding: 25px;
  border: 1px solid #888;
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const CloseModal = styled.button`
  font-size: 20px;
  position: absolute;
  line-height: 20px;
  right: 15px;
  top: 15px;
  width: 30px;
  margin: 0;
  padding: 0;
  padding-left: 1px;
  background-color: rgb(135 206 235 / 90%);
  border: 2px solid red;
  border-radius: 50%;
  font-weight: 800;
  color: #000;
  line-height: 24px;
  transition-duration: 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    color: red;
  }
`;
