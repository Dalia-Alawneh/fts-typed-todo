import { Box, Button, TextField } from "@mui/material"
import { addTodo } from "../../api/endpoints/todo";
import toast from "react-hot-toast";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTodos } from "../../context/TodoContext";

const TodoForm = () => {
  const [newTask, setNewTask] = useState('')
  const { dispatch } = useTodos()

  const handleTaskInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTask(value);
  }

  const handleAddTask = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const { data } = await addTodo({ todo: newTask, completed: false, userId: 1 })
      dispatch({ type: "ADD_TODO", payload: data })
      setNewTask('');
      toast.success('Successfully added!')
    } catch (error) {
      toast.error("Error on adding data")
      console.error(error);
    }
  }
  return (
    <form onSubmit={handleAddTask}
      style={{ width: '100%' }}>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
        <TextField
          sx={{ width: "80%" }} id="filled-basic"
          value={newTask}
          onChange={handleTaskInputChange}
          label="New Task" variant="filled" />
        <Button variant="contained" disabled={!newTask} type="submit">Add Task</Button>
      </Box>
    </form>
  )
}

export default TodoForm
