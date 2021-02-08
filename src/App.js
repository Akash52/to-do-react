import React from 'react'

export default function App() {
  return (
    <div className="App">
    <h1>To Do List</h1>
      <form autoComplete="off">
        <input type="text" name="todos" id="todos" required placeholder="What you do today !?"/>
      <button type="submit">Create</button>
      </form>
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" id=""/>
            Cooking to do
          </label>
          <button>Edit</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" id=""/>
            Study 2 hour
          </label>
          <button>Edit</button>
        </li>
      </ul>

      <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all"/>
        All
      </label>
      <p>You have 0 to do</p>
    <button id="delete">Delete</button>
      </div>

    </div>
  )
}

