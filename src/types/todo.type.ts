import React from "react";

export interface ITodo {
  id: string;
  text: string;
  value: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  editing: string | null;
};

export type ITodoAction =
  | { type: 'ADD'; payload: ITodo; }
  | { type: 'TOGGLE'; payload: string; }
  | { type: 'UPDATE'; payload: {id: string; text: string;}; }
  | { type: 'DELETE'; payload: string; }
;

export interface ITodotModel {
  state: ITodoState;
  dispatch: React.Dispatch<ITodoAction>;
}
