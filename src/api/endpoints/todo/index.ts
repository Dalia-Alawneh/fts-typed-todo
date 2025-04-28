import { TodosResponse } from "../../../types/api";
import Axios from "../../axios";


export const getTodos = async (): Promise<TodosResponse> => {
  return await Axios.get('/todos');
}
