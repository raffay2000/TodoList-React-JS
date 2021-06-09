import React from 'react'

export const Todolist = ({todo, onDelete}) => {
    return (
        <>
        <div>
           <h4>{todo.name}</h4>
           <p>{todo.disc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
export default Todolist
