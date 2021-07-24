import styled from "styled-components/macro";

export const ToDoContainer = styled.ul`
  max-width: 400px;
  margin: 15px auto;
  padding: 20px;
  border-radius: 3px;
  border: 1 solid black;

  list-style: none;

  h4 {
    width: 100%;
    overflow: hidden;
  }
`;

export const Botones = styled.div`
  button {
    padding: 5px 10px;
    border-radius: 8px;
    margin-right: 10px;
  }
`;
