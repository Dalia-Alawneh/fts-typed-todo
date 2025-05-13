import { TodoActions, TodoState } from "../types";

export const initailTodos: TodoState = {
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
      return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)] }
    default:
      return state;
  }
}
