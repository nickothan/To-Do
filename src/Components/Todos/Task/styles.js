import styled from "styled-components/macro";

export const TaskContainer = styled.li`
    display: grid;
    grid-template-columns: 50px 1fr 40px;
    align-items: center;
    box-shadow: 0 0 3px #fff;
    padding: 8px;

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
            background-color: royalblue;
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
    background-color: #ff000080;
    box-shadow: 0 0px 6px 3px #ffae00;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0px 2px 1px #ffae00;
    }

    &:active {
        box-shadow: none;
    }

    svg {
        fill: #292828;
    }
`;
