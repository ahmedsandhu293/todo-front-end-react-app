import React ,{useState}from 'react'
import Todos from './Todos';
import classes from './Input.module.css'
function Input() {
  const [todo,setTodo] = useState('')
  const [todos,setTodos] = useState([]);
  let inputHanlder = (e)=>{
    setTodo(e.target.value);
  }
  let addTodoBtn = ()=>{
    setTodos(prevState=>[...prevState,todo])
    setTodo('')
 
  }
  let removeTodo = (val)=>{
     setTodos(todos.filter(function(item) {
        return item !== val
    }))
  }

  return (
    <div className={classes.input}>
        <span>
        <input value={todo} onChange={inputHanlder} placeholder="Enter your Todo"/>
        <button 
        disabled={todo === '' ? true : false}
        onClick={addTodoBtn}>Add Todo</button>
        </span>
        <Todos todos={todos} removeTodo={removeTodo}/>
    </div>
  )
}

export default Input