import styled from "styled-components/macro";

export const FilterContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;

  button {
    margin: 0 5px;
    padding: 12px;
    border: 0;
    background-color: #19bc9b;
    box-shadow: #19bc9bba 0px 2px 2px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      box-shadow: #19bc9b 0px 2px 8px;
    }

    &:active {
      box-shadow: none;
    }
  }
`;
