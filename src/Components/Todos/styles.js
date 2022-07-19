import styled from "styled-components/macro";

export const ToDoContainer = styled.ul`
  max-width: 400px;
  margin: 15px auto;
  padding: 20px;
  border-radius: 3px;
  border: 1 solid black;

  list-style: none;

  h4 {
    width: 95%;
    overflow: hidden;
  }
`;

export const Botones = styled.div`
  button {
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 8px;
    margin-right: 10px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      font-weight: 600;
    }

    &:nth-child(1) {
      background-color: red;
      border: 1px solid red;
      color: white;
    }
    &:nth-child(2) {
      border: 1px solid red;
    }
  }
`;
