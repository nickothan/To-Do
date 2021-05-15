import styled from "styled-components/macro";

export const FilterContainer = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;

    button {
        margin: 0 5px;
        padding: 7px 8px;
        background-color: lightgreen;
        border: 0;
        box-shadow: 0 2px 2px gold;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            box-shadow: 0 2px 8px gold;
        }

        &:active {
            box-shadow: none;
        }
    }
`;
