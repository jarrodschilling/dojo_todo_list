import { useState } from 'react'

const ToDoForm = props => {
    const {stateUpdater} = props
    const [toDo, setToDo] = useState("")
    const [completedToDo, setCompletedToDo] = useState("false")

    const createToDo = (e) => {
        e.preventDefault()
        
        let newValue={
            toDo,
            completedToDo
        }

        stateUpdater(newValue)
        setToDo("")
    }

    const handleChange = () => {
        setCompletedToDo(!completedToDo)
    }

    return (
        <div>
            <form onSubmit={createToDo}>
                <div className='formBox'>
                    <input id="toDo" value={toDo} type="text" onChange={ (e) => setToDo(e.target.value) } />
                </div>
                <div className='formBox'>
                    <input id="completedToDo" type="checkbox" checked={completedToDo} onChange={handleChange}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ToDoForm