
import Todo from "../model/Todo.js"



//adding new todo//

export const addTodo = async (request, response) => {
    try {
        const newTodo = await Todo.create({
            title:request.body.title,
            description: request.body.description,
            createdAt: Date.now()
        })
        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


//fetching all todos//

export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })



        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


//setting todo to done or !done

export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await todo.save();


        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


//update todo//

export const updateTodo = async (request, response) => {
    try {

        const {title, description} = request.body;

        const newTodo= {};
        if(title){newTodo.title=title};
        if(description){newTodo.description = description};


       let todo= await Todo.findById(request.params.id
           
            // { title: request.body.title },
            // {description:request.body.description}
        )

         todo = await Todo.findByIdAndUpdate(request.params.id,{$set:newTodo},{new:true});


        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


//to delete todo

export const deleteTodo = async (request, response) => {
    try {


        const todo = await Todo.findByIdAndDelete(request.params.id)




        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
