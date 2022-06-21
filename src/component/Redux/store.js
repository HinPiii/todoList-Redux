import { configureStore } from '@reduxjs/toolkit'
import addTodoReducer from './addTodoList'

const store = configureStore({
    reducer: {
        list: addTodoReducer,
    }
})

export default store;