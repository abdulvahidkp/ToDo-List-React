import React,{useEffect} from 'react';
import {v4 as uuidV4} from 'uuid'

function Forms({input, setInput, todos, setTodos, editTodo, setEditTodo}) {

  const updateTodo = (title,id,completed)=>{
    const newTodo = todos.map((todo)=>
      todo.id === id ? {title,id,completed}:todo
    );
    setTodos(newTodo);
    setEditTodo('')
  }

  useEffect(()=>{
    if(editTodo){
      setInput(editTodo.title);
    }else{
      setInput('')
    }
  },[setInput,editTodo])

  const onInputChange = (e) =>{
    setInput(e.target.value);
  }
  const onFormSubmit = (e) =>{
    e.preventDefault();
    if(!editTodo){
      setTodos([...todos,{id:uuidV4(),title:input,completed:false}]);
      setInput('');
    }else{
      updateTodo(input,editTodo.id, editTodo.completed)
    }
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder='Enter a Todo..' className='task-input' name="" id="" value={input} onChange={onInputChange} required/>
      <button className='button-add' type='submit'>
        {editTodo? "OK" : 'Add'}
        </button>
    </form>
  )
}

export default Forms
