import { useSelector} from "react-redux";
import AddForm from "./AddForm";

export default function Todo() {
    const todos = useSelector((state)=>state.todos);

  return (
    <div>
        <h3>Todo List App </h3>
        < AddForm />
     <ul>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
        ))}
    </ul>   
    </div>
  )
}
