import Axios from ".."
import { TodosResponse } from "../types";

export const getTodos = async (): Promise<TodosResponse> => {
  return await Axios.get('/todos');
}
