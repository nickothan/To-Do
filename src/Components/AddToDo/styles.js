import styled from "styled-components/macro";

export const AddToDoContainer = styled.div`
    display: flex;
    justify-content: center;

    form {
        display: flex;
    }

    .fields-container {
    }

    .field-container {
        display: grid;
        grid-template-columns: 100px 200px;

        &:first-child {
            margin-bottom: 5px;
        }
    }

    .add-button {
        margin: 0 20px;
        padding: 7px 8px;
        background-color: royalblue;
        border: 0;
        box-shadow: 0 2px 2px blue;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            box-shadow: 0 2px 5px blue;
        }

        &:active {
            box-shadow: none;
        }
    }
`;
