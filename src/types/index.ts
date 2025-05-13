import { TodoItem } from "./api";

export enum ToDoStatus {
  pending = "Pending",
  completed = "Completed",
}

export type ToDoRow = {
  id: number;
  todo: string;
  completed: boolean;
};

export type TodoState = {
  todos: TodoItem[]
}
export type TodoActions =
  { type: 'SET_TODOS', payload: TodoItem[] }
  | { type: 'UPDATE_TODO'; payload: TodoItem }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'ADD_TODO'; payload: TodoItem }
