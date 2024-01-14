import { useState } from "react";

const ToDoList = (props) => {
    const {liftedState} = props
    const {stateUpdater} = props
    const {setLiftedState} = props


    const deleteToDo = (deletingToDo) => {
        const newToDos = liftedState.filter((obj) => obj !== deletingToDo)
        setLiftedState(newToDos)
    }

    return (
        <div className="jsList">
            <h1>To Do List</h1>
            {
                liftedState.map((obj, index) => (
                    <div key={index}>
                        <p className={`${(obj.completedToDo === 'true' )? 'jsChecked': ''}`}>{obj.toDo}</p>
                        {/* <p className={strikeThrough(obj.completedToDo)}>{obj.toDo}</p> */}
                        {/* <input id="completedToDo" type="checkbox" value={checked} onChange={handleChange}/> */}
                        <button onClick={() => deleteToDo(obj)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList