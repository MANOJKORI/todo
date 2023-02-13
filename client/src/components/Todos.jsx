import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos} from '../redux/actions/index';
import Todo from './Todo';

export const  Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
   

    
    useEffect(() => {
        dispatch(getAllTodos())

       // eslint-disable-next-line
    }, []) 

    
    


    

   

    return (

     <>
         

 

        <div className="row my-3">

            

            <h2>Your Todos</h2>
            <div className="container mx-2">
            {todos.length===0&& 'No Todos to display'}
            </div>
                {
                  
                    todos.map(todo => (
                    <Todo
                    key = {todo._id}
                    todo = {todo}
                    
                  />

                    ))
                }
            </div>

            </>
            
    )
}
export default Todos;