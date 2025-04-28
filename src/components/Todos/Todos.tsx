import { useEffect, useState } from "react"
import TodoDataGrid from "../DataGrid"
import { deleteTodo, getTodos, updateTodoStatus } from "../../api/endpoints/todo"
import { Box } from "@mui/material"
import toast from "react-hot-toast"
import TodoForm from "../TodoForm/TodoForm"
import { useTodos } from "../../context/TodoContext"
import { GridColDef } from "@mui/x-data-grid"
import { ToDoRow } from "../../types"
import ActionsCell from "../DataGrid/ActionsCell"
import StatusCell from "../DataGrid/StatusCell"
const Todos = () => {
  const { state, dispatch } = useTodos()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const { data } = await getTodos();
      dispatch({ type: "SET_TODOS", payload: data.todos });
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
      dispatch({ type: "UPDATE_TODO", payload: data });
      toast.success('Successfully updated!')
    } catch (error) {
      toast.error("Error on updating data")
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { data } = await deleteTodo(id);
      dispatch({ type: "DELETE_TODO", payload: data.id });
      toast.success('Successfully deleted!')
    } catch (error) {
      toast.error("Error on updating data")
      console.error(error);
    }
  };

  const columns: GridColDef<(ToDoRow[])[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'todo',
      headerName: 'TODO Description',
      flex: 0.5,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.2,
      editable: false,

      renderCell: (params) => (
        <StatusCell status={params.row.completed} />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      editable: false,
      width: 200,
      renderCell: (params) => (
        <ActionsCell
          id={params.row.id}
          status={params.row.completed}
          handleDelete={handleDelete}
          handleMarkAsCompleted={handleMarkAsCompleted} />
      ),
    },
  ];

  return (
    <Box sx={{ width: '80%', margin: 'auto', display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <TodoForm />
      <TodoDataGrid columns={columns} rows={state.todos}
        loading={loading}
      />
    </Box>
  )
}

export default Todos
