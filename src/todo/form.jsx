import  {useRef} from "react"
import { v4 as uuidv4 } from 'uuid';


export const Form = ({onSubmit}) => {


  const titleRef = useRef()

  const submit = () => {
    const id = uuidv4()
   const title = titleRef.current.value

   const todo = {
     id, 
     title
   }
   onSubmit(todo)
   titleRef.current.value = ""
  }
  
  return(
    <div>
      <label>Todo</label>
      <input ref={titleRef} />
      <button onClick={submit}>Add</button>
    </div>
  )
}


