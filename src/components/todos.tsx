import React, { useContext } from 'react'
import { TodosContext } from "../context/TodosProvider";
import TodoItem from "./todoItem";

export default function Todos() {
  const { state } = useContext(TodosContext)


  const toggleTodo = (id) => console.log('toggle', id);


  return state.todos.length > 0 ? (
    <ul className="todo-list">
      {state.todos.map(({id, text, value}) => (
        <TodoItem
          id={id}
          editing={state.editing === id}
          text={text}
          checked={value}
          onCheck={toggleTodo}
          onDelete={(id) => console.log('delete', id)}
          onEdit={(id) => console.log('edit', id)}
        />
      ))}
    </ul>
  ) : (<h2 className="empty-todos">No Todo's!</h2>);
}
