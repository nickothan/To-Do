import {configureStore} from "@reduxjs/toolkit";

import todosReducer from "./Slice/todosSlice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});
