import {useState,useRef}from 'react'
import { toggleTodo,updateTodo} from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";




const Todo =({todo})=>{
  const [text, setText] = useState({etitle:"",edescription: ""});
   


    const dispatch = useDispatch()

    const update = ()=>{
      ref.current.click();
      setText({etitle: todo.title, edescription: todo.description})

  }
  const handleClick=(e)=>{

   

    dispatch(updateTodo(todo._id,todo.etitle,todo.edescription));

    refClose.current.click();

}

  const onInputChange = (e) => {
    setText({...text,[e.target.name]:e.target.value});
}



const ref = useRef(null)
const refClose= useRef(null)
      

        // dispatch(updateTodo(todo._id,text))


        
    

    return (
        <>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name ="etitle" aria-describedby="emailHelp" value={text.etitle} onChange={onInputChange}  />
 
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name = "edescription" value={text.edescription} onChange={onInputChange} />
  </div>

    

 
</form>

      </div>
      <div className="modal-footer">
        <button ref={refClose}type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  onClick={handleClick}type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 


        

        <div className="col-md-3">

            <div className="card my-3" >
 
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.description}</p>


    <span onClick={()=>dispatch(toggleTodo(todo._id))}
        style={{
            textDecoration: todo.done? 'line-through':"",
            color:todo.done? '#bdc3c7': '#34495e'
        }}> 
    <i className="fa-regular fa-square-check mx-2"/>
    </span>
    <span className="icon" onClick={()=>{update()}}  >
        
    <i className="fas fa-pen mx-2"/> 
    </span>
    <span className="icon" onClick={()=> dispatch(deleteTodo(todo._id))}>
    <i className="fas fa-trash mx-2" />
    </span>
   

    
        </div>


      
  </div>
</div>
</>
      
        
    )







}
export default Todo;