import styled from "styled-components/macro";

export const TaskContainer = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 27px;
  align-items: center;
  padding: 8px 20px;
  background-color: rgb(255 255 204 / 40%);
  box-shadow: rgb(255 255 204 / 40%) 0px 0px 1px 2px;
  margin-bottom: 10px;
  border-radius: 3px;

  transition-duration: 120ms;

  ${({ completed }) =>
    completed &&
    `
        opacity: 0.3;
    `}

  h3,
    h4 {
    margin: 0;
    padding: 0;
  }

  h4 {
    font-weight: 500;
  }

  .state {
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 3px;
    cursor: pointer;

    ${({ completed }) =>
      completed &&
      `
            background-color: darkgreen;
        `}
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: red;
  border: 0;
  border-radius: 50%;
  background-color: rgb(232 136 138);
  box-shadow: rgb(232 136 138) 0px 0px 6px 1px;
  cursor: pointer;
  transition: all 0.25s linear;

  &:hover {
    box-shadow: 0 0px 2px 1px rgb(232 136 138);
  }

  &:active {
    box-shadow: none;
  }

  svg {
    fill: #292828;
  }
`;
