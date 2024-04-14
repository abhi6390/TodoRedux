import React from 'react'
import AddTodo from '../components/AddTodo'
import CategoryWiseTodo from '../components/CategoryWiseTodo'
import TodoList from '../components/TodoList'
function TodoContainer() {
  return (
    <>
      <AddTodo/>
      {/* <Todo/> */}
      <CategoryWiseTodo/>  
      {/* <TodoList/> */}
    </>
    
  )
}

export default TodoContainer