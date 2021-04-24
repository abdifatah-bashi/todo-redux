
import {ADD_TODO} from "../action/action-type"

const initialState  = {
  todos: [],
  loading: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:{
      const newTodo = action.payload;
      const oldTodos = state.todos
      const newTodos = [...oldTodos, newTodo]
      
      return {
        ...state, 
        todos: action.payload
      }
    }
      
    default:
      return state;
  }
}
