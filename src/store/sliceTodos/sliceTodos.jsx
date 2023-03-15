import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalTodos: 0,
    listTodos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setListTodo: (state, action) => {
            return state = {
                ...state, ...action.payload
            }
        }
    }
})

export const { setListTodo } = todoSlice.actions
export default todoSlice.reducer