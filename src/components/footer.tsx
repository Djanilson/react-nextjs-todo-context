import React from 'react'

export default function Footer({all = true, checked = 'unchecked'}) {
  return (
    <div className="todo-footer">
      <button className="button-outline">ALL</button>
      <button className="button-outline">active</button>
      <button className="button-outline">completed</button>
      <button className='button-clear'>Clear completed</button>
    </div>
  )
}
