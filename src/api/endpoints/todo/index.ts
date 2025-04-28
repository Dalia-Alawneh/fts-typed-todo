import { TodoItemResponse, TodosResponse } from "../../../types/api";
import Axios from "../../axios";


export const getTodos = async (): Promise<TodosResponse> => {
  return await Axios.get('/todos');
}

export const updateTodoStatus = async (id: number, completed: boolean): Promise<TodoItemResponse> => {
  return await Axios.put(`/todos/${id}`, { completed });
}

export const deleteTodo = async (id: number): Promise<TodoItemResponse> => {
  return await Axios.delete(`/todos/${id}`);
}
