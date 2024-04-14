import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            
            const todo = {
                id : nanoid(),
                text: action.payload.text,
                category: action.payload.category
                // completed: false // Adding completed property with default value
            }
            // let temp =[]
            // temp.push(...state.todos)
            // temp.push(todo)
            // state.todos = temp 
            state.todos = [...state.todos,todo]
            // localStorage.setItem('todos', JSON.stringify(state.todos));       
        },
        addCategories: (state, action) => {
            const newCat = {
                id: nanoid(),
                name: action.payload
            };
            state.categories = [...state.categories, newCat];
            // localStorage.setItem('categories', JSON.stringify(state.categories));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            // localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
            // localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleCompleted: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
            // localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeCategories: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload);
            // localStorage.setItem('categories', JSON.stringify(state.categories));
        }
    }
});

export const { addTodo, removeTodo, updateTodo, addCategories, removeCategories, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;

