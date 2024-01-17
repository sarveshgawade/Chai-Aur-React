import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        title: 'todo number-1',
        isCompleted: false
    }],
    addTodo: (title) => {},
    updateTodo: (id,title) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

// custom hook
export const useTodo = () => { 
    return useContext(TodoContext)
}