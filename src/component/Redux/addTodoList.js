import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, name: 'Learn React-native', priority: 'High' },
    { id: 2, name: 'Learn React-redux', priority: 'High' }
]

const addTodoList = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

const { reducer, actions } = addTodoList;
export const { addTodo, deleteTodo } = actions;
export default reducer;
