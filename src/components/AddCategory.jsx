import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addCategories } from '../features/todo/todoSlice'

function AddCategory() {
    const dispatch = useDispatch()
    const [msg,setMsg] = useState('')
    const [category, setCategory] = useState('')
    
    const onAddCategoryBtn = (e) => {
        e.preventDefault()
        if(category.length === 0){
            setMsg('The category name cannot be empty')
            setTimeout(()=>{
                setMsg('')
            },1500)            
        }
       else{
        dispatch(addCategories(category))
        setCategory('')
       }
    }
  return (
    <>
        <h1 className='text-2xl text-black mx-2 my-2 text-center text-bold'>Add Your Categories</h1>
        <div className=' flex items-center justify-center'>
            <form onSubmit={onAddCategoryBtn} className="space-x-3 mt-12 text-center">
            <input
                type="text"
                className="ml-auto bg-gray-800 rounded border w-[50%] border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Category..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
                <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none 
                hover:bg-indigo-600 rounded text-lg"
            >
                Add Category
            </button>
            <p className={`text-red-500 text-lg h-4 mb-2 mt-2  text-center `}>{msg}</p>
                </form>    
        </div>    
    </>
   
  )
}

export default AddCategory