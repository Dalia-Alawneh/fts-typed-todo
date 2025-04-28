import { useEffect, useState } from "react"
import TodoDataGrid from "../DataGrid"
import {  deleteTodo, getTodos, updateTodoStatus } from "../../api/endpoints/todo"
import { TodoItem } from "../../types/api"
import { Box } from "@mui/material"
import toast from "react-hot-toast"
import TodoForm from "../TodoForm/TodoForm"

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const { data } = await getTodos();
      setTodos(data.todos);
    } catch (error) {
      toast.error("Error on fetching data")
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsCompleted = async (id: number) => {
    try {
      const { data } = await updateTodoStatus(id, true);
      setTodos(prev =>
        prev.map(todo => todo.id === id ? data : todo)
      );
      toast.success('Successfully updated!')
    } catch (error) {
      toast.error("Error on updating data")
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { data } = await deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== data.id));
      toast.success('Successfully deleted!')
    } catch (error) {
      toast.error("Error on updating data")
      console.error(error);
    }
  };

 

  return (
    <Box sx={{ width: '80%', margin: 'auto', display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <TodoForm setTodos={setTodos} />
      <TodoDataGrid rows={todos}
        loading={loading}
        handleMarkAsCompleted={handleMarkAsCompleted}
        handleDelete={handleDelete}
      />
    </Box>
  )
}

export default Todos
