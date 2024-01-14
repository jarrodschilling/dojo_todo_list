import { useState } from 'react'
import ToDoForm from './components/todoForm'
import ToDoList from './components/todoList'
import './App.css'

function App() {
  const [liftedState, setLiftedState] = useState([])
  const stateUpdater = (newValue) => {
    // New method not working as shown in video, but this one does
    setLiftedState([...liftedState, newValue])
  }

  return (
    <>
      <h1>APP PARENT</h1>
      <ToDoForm stateUpdater={stateUpdater}/>
      <ToDoList liftedState={liftedState} stateUpdater={stateUpdater} setLiftedState={setLiftedState}/>
    </>
  )
}

export default App
