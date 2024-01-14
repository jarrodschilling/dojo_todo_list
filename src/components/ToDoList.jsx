import { useState } from "react";

const ToDoList = (props) => {
    const {liftedState} = props
    const {setLiftedState} = props


    const deleteToDo = (indexToDelete) => {
        const newToDos = liftedState.filter((obj, idx) => idx !== indexToDelete)
        setLiftedState(newToDos)
    }

    const handleCompleted = (checkIdx) => {
        const newToDos = liftedState.map((obj, idx) => idx === checkIdx? {...obj, completedToDo: !obj.completedToDo}: obj)
        setLiftedState(newToDos)
    }

    return (
        <div className="jsMasterList">
        <h1>To Do List</h1>
        <div className="jsList">            
            {
                liftedState.map((obj, index) => (
                    <div key={index} className="row">
                        <p className={`${(obj.completedToDo === true )? 'jsChecked': ''}`}>{obj.toDo}</p>
                        {/* <p className={strikeThrough(obj.completedToDo)}>{obj.toDo}</p> */}
                        <input id="completedToDo" type="checkbox" onChange={() => handleCompleted(index)}/>
                        <button className="jsDelete" onClick={() => deleteToDo(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default ToDoList