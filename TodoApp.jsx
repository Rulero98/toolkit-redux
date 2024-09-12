import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./src/store/apis/todosApi"

export const TodoApp = () => {

  // const { data: todos = [], isLoading, isFetching } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const nextTodo = () => {
    console.log(todoId)
    setTodoId(todoId + 1)
  }
  const prevTodo = () => {

    if (todoId === 1) return
    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>is Loading: {isLoading ? 'True' : 'False'} </h4>
      <div> {JSON.stringify(todo)} </div>

      {/* <ul>
        {todos?.map(todo => (
          <li key={todo.id}>
            <strong> {todo.completed ? 'Done' : "Donen't"}  </strong> {todo.title}
          </li>
        ))}
      </ul> */}




      <button onClick={prevTodo}>
        Prev Todo
      </button>
      <button onClick={nextTodo} >
        Next Todo
      </button>
    </>
  )
}
