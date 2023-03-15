import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import sliceTodos from "./sliceTodos/sliceTodos";
import { apiTodos } from "./todosApi/todosApi";

export const store = configureStore({

    reducer: {
        todoListStore: sliceTodos,
        [apiTodos.reducerPath]: apiTodos.reducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiTodos.middleware)

})

setupListeners(store.dispatch)

