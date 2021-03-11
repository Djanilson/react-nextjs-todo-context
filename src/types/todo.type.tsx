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

export type ITodoActions =
  | { type: 'ADD'; payload: ITodo; }
  | { type: 'TOGGLE'; payload: string; }
  | { type: 'EDIT'; payload: ITodo; }
  | { type: 'UPDATE'; payload: ITodo; }
  | { type: 'DELETE'; payload: string; }
;

export interface ITodotModel {
  state: ITodoState;
  dispatch: React.Dispatch<ITodoActions>;
}
