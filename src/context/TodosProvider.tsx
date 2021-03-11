import React, { useReducer } from 'react'
import { ITodoAction, ITodoState, ITodotModel } from "../types/todo.type";

const defaultState: ITodoState = {
  todos: [],
  editing: null,
};

const reducer = (state: ITodoState, action: ITodoAction): ITodoState => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'UPDATE':
      const idx = state.todos.findIndex(item => item.id === action.payload.id);
      const editedTodos = state.todos;

      editedTodos[idx].text = action.payload.text;

      return {
        ...state,
        todos: editedTodos,
      };

    case 'TOGGLE':
      const todoIdx = state.todos.findIndex(item => item.id === action.payload);
      const todos = state.todos;

      todos[todoIdx].value = !todos[todoIdx].value;

      return {
        ...state,
        todos: todos,
      };

    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export const TodosContext = React.createContext({} as ITodotModel);
export const TodosProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      {children}
    </TodosContext.Provider>
  )
}
