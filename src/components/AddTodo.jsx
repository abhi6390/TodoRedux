import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const [errorMsg,setErrorMsg]=useState('')
    const {type} = useParams()
    const addTodoBtn =(e)=>{
        e.preventDefault()

        if(todo.trim().length == 0){
            setErrorMsg('Provide a name for the todo');
            setTimeout(()=>{
              setErrorMsg('')
            },1500)
            setTodo('')
            return
        }
        const todoItem  = {
            text:todo.trim(),
            category:type
        }
        dispatch(addTodo(todoItem))
        setTodo('')
}

    return (
        <form onSubmit={addTodoBtn} className="space-x-3 mt-12 text-center">
            <h1 className='text-xl text-bold  mb-4'>{`Add Todos for your Category: ${type}`}</h1>
            <input
                type="text"
                className="ml-auto bg-gray-800 rounded border w-[25%] border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
            <Link to={'/'}>
                <button className="p-3 bg-blue-500 text-white rounded-md">Go back</button>
            </Link>
            <p className={`text-red-500 text-lg h-4 mb-2 mt-2  text-center `}>{errorMsg}</p>
        </form>
    );
}

export default AddTodo;
