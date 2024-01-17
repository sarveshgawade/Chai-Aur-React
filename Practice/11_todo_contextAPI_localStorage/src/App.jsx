
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
 
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{id: Date.now(), ...todo}, ...prevTodo])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,isCompleted : !prevTodo.isCompleted}: prevTodo))
  }

  // localStorage stores all the data in string format. Thus while storing and getting the data we need to convert and de-convert the data in suitable format
  useEffect(()=>{
 
        let todosArray = JSON.parse(localStorage.getItem('todos'))
      

      if(todosArray && todosArray.length > 0){
        setTodos(todosArray)
      }
   

  },[]) 

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
    
  },[todos])

  return (
    <TodoProvider value={{addTodo,deleteTodo,todos,toggleComplete,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {
                    todos.map((todoItem) => (
                        <div className='w-full' key={todoItem.id}>
                            <TodoItem todo={todoItem}/>
                        </div>
                    ))
                  }
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
