import React, { useContext, useRef, useState } from 'react'
import { uuid } from '../utils/uuid';
import { ITodo } from 'types/todo.type';
import { TodosContext } from 'context/TodosProvider';
import { addTodoAct } from 'actions/TodoActions';

export default function Header() {
  const { dispatch } = useContext(TodosContext);
  const inputText = useRef(null);

  const addTodo = () => {
    if (!inputText.current.value) {
      return;
    }

    dispatch(addTodoAct({
      id: uuid(),
      text: inputText.current.value.trim(),
      value: false,
    }));

    inputText.current.value = "";
  };

  return (
    <header className="todo-header">
      <input type="checkbox" name="check-all" />
      <input ref={inputText} placeholder="what need to be done?" type="text" name="todo" />
      <button className="button" onClick={addTodo}>add</button>
    </header>
  )
}
