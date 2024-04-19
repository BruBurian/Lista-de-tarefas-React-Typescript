import {FaPen, FaClipboardList} from "react-icons/fa";
import ListaDeTarefas from "./components/listaDeTarefas";
import "./CSS/App.css"

function App() {

  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaPen/>
          <h1>Lista de Tarefas Bruno Burian</h1>
          <FaClipboardList/>
        </div>
      </div>
      <ListaDeTarefas />
    </div>
  )
}

export default App;
