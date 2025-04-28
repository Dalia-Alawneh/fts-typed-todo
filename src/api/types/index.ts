export interface TodoItem {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface TodosResponse {
  todos: TodoItem[];
  total: number;
  skip: number;
  limit: number;
}