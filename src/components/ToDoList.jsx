import { useState } from "react";

const ToDoList = (props) => {
    const {liftedState} = props
    const {stateUpdater} = props
    const [completedToDo, setCompletedToDo] = useState("false")

    // const handleChange = () => {
    //     e.preventDefault()
    //     setCompletedToDo("true")

    //     let newValue={
    //         completedToDo
    //     }

    //     stateUpdater(newValue)
    // }
    const [checked, setChecked] = useState('false')
    const handleChange = (e) => {
        console.log("test")
        // setChecked({...checked, [e.target.name] : e.target.checked})
        setChecked("true")
        console.log(e.target.value)
        console.log(checked)
        }


    return (
        <div className="jsList">
            <h1>To Do List</h1>
            {
                liftedState.map((obj, index) => (
                    <div key={index}>
                        <p className={`${(checked === true )? 'jsChecked': ''}`}>{obj.toDo}</p>
                        <input id="completedToDo" type="checkbox" value={checked} onChange={handleChange}/>
                        <button>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList