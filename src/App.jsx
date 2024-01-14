import { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  const [liftedState, setLiftedState] = useState([])
  const stateUpdater = (newValue) => {
    // New method not working as shown in video, but this one does
    setLiftedState([...liftedState, newValue])
  }

  return (
    <>
      <ToDoForm stateUpdater={stateUpdater}/>
      <ToDoList liftedState={liftedState} setLiftedState={setLiftedState}/>
    </>
  )
}

export default App
