import { useState } from "react";
import TodoList from "./TodoList";
import "./Todos.css"

export default function () {
    
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        
        setText(e.target.value);
    }

    const handleClick = () => {
        const payload =  {status: false, title: text}
        setTodoList([...todoList, payload]);
        
        //     maintain previous, and text
    }
    
    return (
        <div>
            <input type="text" placeholder="Add todo" onChange={handleChange} className="inputBox" />
            <button onClick={handleClick} className="addButton" >Add</button>
              <TodoList data = {todoList}/>
        </div>
    )
}