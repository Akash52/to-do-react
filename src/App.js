import React from 'react'
import Footer from './components/Footer'
import FormInput from './components/FormInput'
import List from './components/List'

export default function App() {
  return (
    <div className="App">
    <h1>To Do List</h1>
      <FormInput/>
      <List/>
      <Footer/>
    </div>
  )
}

