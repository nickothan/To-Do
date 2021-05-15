import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "First task",
        description: "clean home.",
        completed: false,
    },
];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDo: (store, action) => [...store, action.payload],
        toggleToDo: (store, action) => [
            ...store.map((toDo) =>
                toDo.id === action.payload ? { ...toDo, completed: !toDo.completed } : toDo
            ),
        ],
    },
});

export const { addToDo, toggleToDo } = todosSlice.actions;

export default todosSlice.reducer;
