import { deleteTodoAct, toggleTodoAct, updateTodoAct } from 'actions/TodoActions';
import React, { useContext } from 'react'
import { TodosContext } from "../context/TodosProvider";
import TodoItem from "./todoItem";

export default function Todos() {
  const { state, dispatch } = useContext(TodosContext);

  const toggleTodo = (id: string) => dispatch(toggleTodoAct(id));
  const deleteTodo = (id: string) => dispatch(deleteTodoAct(id));
  const editTodo = (id: string, text: string) => {
    if (!id || !text) {
      return;
    }

    dispatch(updateTodoAct({text, id}));
  };

  return state.todos.length > 0 ? (
    <ul className="todo-list">
      {state.todos.map(({id, text, value}) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          checked={value}
          onCheck={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      ))}
    </ul>
  ) : (<h2 className="empty-todos">No Todo's!</h2>);
}
