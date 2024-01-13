import { useState } from "react";

const ToDoList = (props) => {
    const {liftedState} = props

    return (
        <div className="jsList">
            <h1>To Do List</h1>
            {
                liftedState.map((obj, index) => (
                    <div key={index}>
                        <p>{obj.toDo}</p>
                        <button>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList