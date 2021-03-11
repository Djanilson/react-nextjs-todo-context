import React, { useState } from 'react'
import { ITodo } from 'types/todo.type'

interface TodoItemProps {
  id: string;
  text: string;
  checked: boolean | false;
  onCheck: (payload: any) => void;
  onDelete: (payload: any) => void;
  onEdit: (id: string, text: string) => void;
};

export default function TodoItem({
  id,
  text,
  checked,
  onCheck,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [editing, setEditing] = useState(false);

  const editTodo = (e, id) => {
    onEdit(id, e.target.value);
    setEditing(!editing);
  }
  return (
    <li
      key={id}
      onDoubleClick={() => setEditing(!editing)}
      className={`${checked ? 'checked' : ''}`}
    >
      <input
        id={id}
        onChange={() => onCheck(id)}
        type="checkbox"
        checked={checked || false}
      />
      {editing
        ? (
          <input
            onBlur={(e) => editTodo(e, id)}
            type="text"
            defaultValue={text}
          />
        )
        : (
          <label htmlFor={id}>{text}</label>
        )
      }
      <button onClick={() => onDelete(id)} className="button-outline delete-todo">X</button>
    </li>
  )
}
