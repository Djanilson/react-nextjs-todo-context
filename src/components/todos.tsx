import React from 'react'

export default function Todos() {
  return (
    <ul className="todo-list">
      {[1,2,3].map((item, idx) => (
        <li key={idx}>
          <input type="checkbox" id={`aa`}/>
          <span>{`${item} - text`}</span>
          <button className="button-outline delete-todo">X</button>
        </li>
      ))}
    </ul>
  )
}
