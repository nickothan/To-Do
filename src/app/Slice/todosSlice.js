import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Lavar platos",
        description: "Lavar platos.",
        completed: true,
    },
    {
        id: 2,
        title: "Tender la cama",
        description: "Tender la cama.",
        completed: true,
    },
    {
        id: 3,
        title: "Barrer",
        description: "Barrer toda la casa.",
        completed: false,
    },
    {
        id: 4,
        title: "Hacer compras",
        description: "Leche, pan, huevos, avena.",
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
        removeToDo: (store, action) => store.filter((task) => task.id !== action.payload),
    },
});

export const { addToDo, toggleToDo, removeToDo } = todosSlice.actions;

export default todosSlice.reducer;
