import React from 'react'
import { ITodo } from 'types/todo.type'

interface TodoItemProps {
  id: string;
  text: string;
  checked: boolean;
  editing: boolean;
  onCheck: (payload: any) => void;
  onDelete: (payload: any) => void;
  onEdit: (payload: any) => void;
};

export default function TodoItem({
  id,
  text,
  checked,
  editing,
  onCheck,
  onDelete,
  onEdit,
}: TodoItemProps) {
  return (
    <li key={id}
      onClick={() => onCheck(id)}
      onDoubleClick={() => onEdit(id)}
    >
      <input type="checkbox" id={id} defaultChecked={checked} />
      <span>{`${editing} - ${text}`}</span>
      <button onClick={() => onDelete(id)} className="button-outline delete-todo">X</button>
    </li>
  )
}
