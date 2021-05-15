import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./Slice/todosSlice";
import filterReducer from "./Slice/filterSlice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filter: filterReducer,
    },
});
