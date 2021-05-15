import { createSlice } from "@reduxjs/toolkit";
import { filters } from "../../consts";

const initialState = filters.ALL;

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (store, action) => action.payload,
    },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
