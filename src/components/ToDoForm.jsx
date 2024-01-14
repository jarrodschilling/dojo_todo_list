import { useState } from 'react'

const ToDoForm = props => {
    const {stateUpdater} = props
    const [toDo, setToDo] = useState("")
    const [completedToDo, setCompletedToDo] = useState(false)

    const createToDo = (e) => {
        e.preventDefault()
        
        let newValue={
            toDo,
            completedToDo
        }

        stateUpdater(newValue)
        setToDo("")
    }


    return (
        <div className='formBox'>
            <form onSubmit={createToDo}>
                <div>
                    <input id="toDo" className="jsInput" value={toDo} type="text" onChange={ (e) => setToDo(e.target.value) } />
                </div>
                <button className='jsBtn'>Add</button>
            </form>
        </div>
    )
}

export default ToDoForm