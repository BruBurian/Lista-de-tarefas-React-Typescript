import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {

    Tarefas: (): TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todoStr ? JSON.parse(todoStr) : [];
    },

    AdicionarTarefas: (text:string): TodoTypes => {
        const todos = TodoService.Tarefas();
        const novaTarefa: TodoTypes = {id: todos.length + 1, text, completed: false};
        const AtualizarTarefas = [...todos, novaTarefa];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(AtualizarTarefas));
        return novaTarefa
    },

    atualizarTarefa: (todo:TodoTypes) : TodoTypes => {
        const todos = TodoService.Tarefas();
        const AtualizarTarefas = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(AtualizarTarefas));
        return todo;
    },

    DeletandoTarefa: (id:number): void =>{
        const todos = TodoService.Tarefas();
        const AtualizarTarefas = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(AtualizarTarefas));
    }
}

export default TodoService