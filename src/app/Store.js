import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../features/todo/todoSlice';

 const loadState = () => {
     try {
       const serializedState = localStorage.getItem("TodoApp");
       if (serializedState === null) {
         return undefined;
       }
       return JSON.parse(serializedState);
     } catch (err) {
       return undefined;
     }
   };


export const Store = configureStore({
    reducer: todoSlice,
    preloadedState: loadState(),
});