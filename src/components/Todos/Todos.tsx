import { useEffect, useState } from "react"
import TodoDataGrid from "../DataGrid"
import { deleteTodo, getTodos, updateTodoStatus } from "../../api/endpoints/todo"
import { TodoItem } from "../../types/api"

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
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsCompleted = async (id: number) => {
    try {
      const {data} = await updateTodoStatus(id, true);
      setTodos(prev =>
        prev.map(todo => todo.id === id ? data : todo)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const {data} = await deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== data.id));
    } catch (error) {
      console.error(error); 
    }
  };


  return (
    <>
      <TodoDataGrid rows={todos}
        loading={loading}
        handleMarkAsCompleted={handleMarkAsCompleted}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default Todos
