import './App.css';
import {useState} from "react";
import {TaskComponent} from "./TaskConponent";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTodo = () => {
        setTodoList([...todoList, newTask]);
    }

    const deleteTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    const deleteTask = (TaskName) => {
        const newTodoList = [...todoList];
        newTodoList.splice(newTodoList.indexOf(TaskName), 1);
        setTodoList(newTodoList);
    }

    return (
        <div className="App">
            <div className={"addTask"}>
                <input type="text" placeholder="Add Task" onChange={handleChange}/>
                <br/>
                <button onClick={addTodo}>AddTask</button>
            </div>
            <br/>
            <div className="list" >
                {todoList.map((todo, index) => {
                        return <TaskComponent todo={todo} index={index} deleteTodo={deleteTodo} deleteTask={deleteTask}/>
                    }
                )}

            </div>
        </div>
    );
}


export default App;
