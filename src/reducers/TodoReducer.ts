import { TodoItem } from "../types/api";

type TodoState = {
  todos: TodoItem[]
}
type TodoActions =
  { type: 'SET_TODOS', payload: TodoItem[] }
  | { type: 'UPDATE_TODO'; payload: TodoItem }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'ADD_TODO'; payload: Omit<TodoItem, 'id'> }

export const todos: TodoState = {
  todos: []
}

export const todoReducer = (state: TodoState, action: TodoActions) => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      }
    case 'ADD_TODO':
      return { ...state, todos: [action.payload, ...state.todos] };
    case 'DELETE_TODO':
      return { ...state, todos: [...state.todos.filter(todo => todo.id === action.payload)] }
    default:
      return state;
  }
}
