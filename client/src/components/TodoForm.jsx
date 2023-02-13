import { useState } from "react";

import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [text, setText] = useState({title:"",description: ""});

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text.title,text.description));
        setText({title:"",description: ""});
    }
    const onInputChange = (e) => {
        setText({...text,[e.target.name]:e.target.value});
    }
    return (
        
        <div className="container my -3">
                <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name ="title" aria-describedby="emailHelp" value={text.title} onChange={onInputChange}  />
 
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name = "description" value={text.description} onChange={onInputChange} />
  </div>

    

  <button disabled={text.title.length<5|| text.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Todo</button>
</form>


        </div>





    )
}
export default TodoForm;