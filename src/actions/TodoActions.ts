import { ITodoAction, ITodo } from "../types/todo.type";

export const addTodoAct = (params: ITodo): ITodoAction => ({
  type: 'ADD',
  payload: params
});

export const updateTodoAct = (params: {
  id: string;
  text: string;
}): ITodoAction => ({
  type: 'UPDATE',
  payload: params
});

export const toggleTodoAct = (id: string): ITodoAction => ({
  type: 'TOGGLE',
  payload: id
});

export const deleteTodoAct = (id: string): ITodoAction => ({
  type: 'DELETE',
  payload: id
});