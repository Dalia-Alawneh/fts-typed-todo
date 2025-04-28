import { createContext, ReactNode, useContext, useReducer } from "react";
import { TodoActions, TodoState } from "../types";
import { initailTodos, todoReducer } from "../reducers/TodoReducer";
type TodosContextType = {
  state: TodoState;
  dispatch: React.Dispatch<TodoActions>;
} | undefined
export const TodosContext = createContext<TodosContextType>(undefined);

export const TodosProvider = ({ children }:{children: ReactNode}) => {
  const [state, dispatch] = useReducer(todoReducer, initailTodos)
  return <TodosContext.Provider value={{state, dispatch}}>
    {children}
  </TodosContext.Provider>
}

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider');
  }
  return context;
};