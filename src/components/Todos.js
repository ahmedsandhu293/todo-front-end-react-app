import React from 'react'
import classes from './Todos.module.css'
function Todos(props) {
  return (
    <div className={classes.todosCard}>
    {props.todos.map((e,i)=>{  
        return <div className={classes.todos} key={i} > 
        <p>🖥 {e}</p> 
        <button onClick={()=>props.removeTodo(e)}>Complete</button>
        </div>
      })}
    </div>
  )
}

export default Todos