import React, {Dispatch, SetStateAction, useState} from 'react';
import TodoService from '../TodoService';
import TodoTypes from '../todo';
import "../CSS/TodoForm.css"

interface PropTypes{
    setTodos : Dispatch<SetStateAction<TodoTypes[]>>
}

const TodoForm:React.FC<PropTypes> = ({setTodos}) => {
    const [newTodoText, setNewTodoText] = useState<string>("");

    const handleAddTodo = () => {
        if(newTodoText.trim() !== ""){
            const newTodo = TodoService.AdicionarTarefas(newTodoText);
            setTodos((prevTodo) => [...prevTodo,newTodo]);
            setNewTodoText("");
            
        }
    }
  
    return <div className="inputForm">

        <input type="text" value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder='Adicionar uma tarefa'
        />
        <button onClick={handleAddTodo}>Adicionar tarefa</button>
    </div>
}

export default TodoForm