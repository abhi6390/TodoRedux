import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './app/Store'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategoryContainer from './outerPages/CategoryContainer.jsx'
import TodoContainer from './outerPages/TodoContainer.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<CategoryContainer/>
      },
      {
        path:'/category',
        element:<CategoryContainer/>
      },
      {
        path:'/:type',
        element:<TodoContainer/>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={Store}>
    <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>,
)
