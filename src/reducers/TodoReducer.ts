import { TodoItem } from "../types/api";

type TodoState = {
  todos: TodoItem[]
}
type TodoActions = { type: 'UPDATE_TODO'; payload: TodoItem }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'ADD_TODO'; payload: Omit<TodoItem, 'id'> }

export const todos: TodoState = {
  todos: []
}

export const todoReducer = (state: TodoState, action: TodoActions) => {
  switch (action.type){
    case 'UPDATE_TODO':

  }
}