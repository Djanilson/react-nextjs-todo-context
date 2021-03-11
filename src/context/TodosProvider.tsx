import React, { useReducer } from 'react'
import { ITodoActions, ITodoState, ITodotModel } from "../types/todo.type";

const defaultState: ITodoState = {
  todos: [
    // {id: '1', text: 'hello', value: false },
    // {id: '2', text: 'world', value: !false },
  ],
  editing: null,
};

const reducer = (state: ITodoState, action: ITodoActions): ITodoState => {
  switch (action.type) {
    case 'ADD':
      return state;
    case 'EDIT':
      return state;
    case 'UPDATE':
      return state;
    case 'TOGGLE':
      return state;
    case 'DELETE':
      return state;

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
