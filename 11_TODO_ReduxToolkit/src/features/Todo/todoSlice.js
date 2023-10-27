import {createSlice,nanoid} from '@reduxjs/toolkit'

// nanoid => Generates unique id

const initialState = {
    todos: [{id:1,text: 'hello world'}]
} 

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        // state -> current state of the todo
        // action -> using action we can access the todo info
        addTodo: (state,action) => {

            // here we are creating a new todo obj & the we fill data from the action & then just update the state of the obj
            const newTodo =  {
                id: nanoid(),
                text: action.payload
            }

            // below todos is the array initialzed in the initial State
            state.todos.push(newTodo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.map((t) => t.id !== action.payload)
        }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer     