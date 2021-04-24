import {Provider, useDispatch, useSelector} from "react-redux"
import logo from './logo.svg';
import './App.css';
import {Form} from "./todo/form"
import {store} from "./store/config-store"
import {addTodo} from "./store/action/action"


function App() {

  const todosList = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const onSubmit = (todo) => {
    dispatch(addTodo(todo))
  }

  

  return (
      <div className="App">
      <h3>Redux tutorial</h3>
      <Form onSubmit={onSubmit}/>
      {todosList.map(todo => {
        return (
          <h4 key={todo.id}>{todo.title}</h4>
        )
      })}
    </div>
  );
}

export default App;
