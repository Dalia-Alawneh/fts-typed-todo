import { useEffect, useState } from "react"
import TodoDataGrid from "../DataGrid/DataGrid"
import { TodoItem } from "../../api/types"
import { getTodos } from "../../api/todo"

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  useEffect(()=>{
    async function getTodoData(){
      const {data} = await getTodos();
      setTodos(data.todos)
    } 
    getTodoData()
  },[])
  
  return (
    <>
      <TodoDataGrid rows={todos} />
    </>
  )
}

export default Todos
