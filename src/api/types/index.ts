export interface TodoItem {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface TodosResponse {
  data: {
    todos: TodoItem[];
    total: number;
    skip: number;
    limit: number;
  }
}