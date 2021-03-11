import React from 'react'

export default function Footer({all = true, checked = 'unchecked'}) {
  return (
    <div className="todo-footer">
      <button className="button-clear">ALL</button>
      <button className="button-clear">active</button>
      <button className='button-clear'>Clear completed</button>
    </div>
  )
}
