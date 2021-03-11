import React from 'react'

export default function Header() {
  return (
    <header className="todo-header">
      <input type="checkbox" name="check-all" defaultChecked={false} />
      <input placeholder="what need to be done?" type="text" name="todo" />
      <button className="button">add</button>
    </header>
  )
}
