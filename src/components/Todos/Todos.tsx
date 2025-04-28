import { useEffect, useState } from "react"
import TodoDataGrid from "../DataGrid"
import { getTodos } from "../../api/endpoints/todo"
import { TodoItem } from "../../types/api"

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  useEffect(() => {
    async function getTodoData() {
      const { data } = await getTodos();
      setTodos(data.todos)
    }
    getTodoData()
  }, [])

  return (
    <>
      <TodoDataGrid rows={todos} />
    </>
  )
}

export default Todos
