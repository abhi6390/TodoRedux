import React from 'react'
import './App.css'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
export default function App() {

  const state = useSelector((state) => state);

  useEffect(() => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem('TodoApp', JSON.stringify(state));
  }, [state]);

  return (
    <>
    <Outlet/>
    
    </>
  )
}
