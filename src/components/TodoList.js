import React from 'react'

function TodoList({todos,setTodos, setEditTodo}) {
  
  const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
  } 
  const completeTodo = (id) => {
    setTodos(
        todos.map((todo) => {
            if(todo.id === id){
                return {...todo,completed: !todo.completed};
            }
            return todo;
        })
    )
  }

  const editTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo); 
  }
    
  return (
    <div>
        {todos.map((todo)=> (
            <li className='list-item' key={todo.id}>
                <input type="text" value={todo.title} className={`list ${todo.completed ? 'complete' : ''}` } onChange={(e)=>{e.preventDefault()}} />
           
        <div>
            <button className='button-complete task-button' onClick={()=>completeTodo(todo.id)}>
                <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={()=>editTodo(todo.id)}>
                <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={()=>deleteTodo(todo.id)}>
                <i className='fa fa-trash'></i>
            </button>
        </div>
        </li>
        ))} 
    </div>
  )
}

export default TodoList
