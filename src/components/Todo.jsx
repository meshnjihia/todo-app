import { v4 as uuidv4 } from 'uuid'

import React, { useRef, useState } from 'react'

import TodoItem from './TodoItem'

const Todo = () => {
  const [todos, setTodos] = useState([])
  // const [error, setError] = useState('')
  const titleRef = useRef()

  const addTodoHandler = () => {
    const tilte = titleRef.current.value
    const todoData = {
      id: uuidv4(),
      title: tilte,
      status: false,
    }

    const newTodos = [todoData, ...todos]
    setTodos(newTodos)
    titleRef.current.value = ''
  }

  const updateTodoStatus = (id, title) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    })

    setTodos(updateTodos)
  }

  const deleteTodo = (id, title) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="font-bold text-center text-white">Todo Application</h1>
        <h1 className="font-thin text-center text-gray-300">Add Todo</h1>
      </div>
      <div className="flex items-center bg-gray-500 rounded-xl">
        <input
          ref={titleRef}
          type="text"
          className="w-full bg-gray-500 text-white p-2 rounded-xl outline-none"
          placeholder="Add todo Item ..."
        />
        <button
          onClick={addTodoHandler}
          className="p-2 rounded-r-xl bg-orange-400 text-white hover:bg-orange-800 whitespace-nowrap"
        >
          Add Todo item
        </button>
      </div>
      <div className="mt-10 space-y-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodoStatus}
          />
        ))}
      </div>
    </div>
  )
}

export default Todo
