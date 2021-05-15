import styled from "styled-components/macro";

export const ToDoContainer = styled.ul`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0 0 3px blue;
    list-style: none;
`;

export const TaskContainer = styled.li`
    display: flex;

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

    .state {
        width: 16px;
        height: 16px;
        margin-right: 8px;
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
