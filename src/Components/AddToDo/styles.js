import styled from "styled-components/macro";

export const AddToDoContainer = styled.div`
    display: flex;
    justify-content: center;

    form {
        display: flex;
        padding: 30px 60px;
        background-color: rgb(255 255 204 / 40%);
        box-shadow: #19bc9b 0px 0px 5px 2px;
        border-radius: 8px;
    }

    .field-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 30px;
    }

    label {
        color: black;
        font-weight: 600;
    }

    input {
        background-color: transparent;
        padding-top: 5px;
        outline: none;
        color: black;
        border: none;
        border-bottom: 2px solid #19bc9b;
    }

    input[type=textarea] {

    }

    input::placeholder {
        background-color: transparent;
        outline: none;
        color: black;
        border: none;
        padding-top: 0%;;

    }
}

.add-button {
    background-color: #1abc9c;
    box-shadow: 0 2px 6px 0 rgb(26 188 156 / 50%);

    &:hover {
    background-color: #16a085;
    border-color: #15967d;
    }

    &:active {
           color: #fff;
    background-color: #15967d;
    border-color: #148d75;
    }
`;
