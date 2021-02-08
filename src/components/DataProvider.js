import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([
    { name: 'Cooking', complete: false },
    { name: 'Playing', complete: true },
  ])

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  )
}
