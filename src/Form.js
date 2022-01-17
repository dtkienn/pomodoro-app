import React, {useState} from "react"
import Button from '@atlaskit/button' 
import Textfield from '@atlaskit/textfield'
import TodoList from "./TodoList";
import Timer from "./Timer"
import {v4} from 'uuid'

export default function Form() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1200);
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const onAddBtn = (e) => {
        setTodoList([...todoList, {id: v4(), name: input}]);
        setInput("");
    }
    return (
        <>
            <div className="inner-container">
                <div className="inner-title">Your Pomodoro App</div>
                <Timer expiryTimestamp={time}/>
                <Textfield value={input} onChange={handleInputChange}>
                </Textfield>
                <Button isDisabled={!input} className="form-btn" onClick={onAddBtn} appearance="primary">
                        Add Task!
                </Button>
                <TodoList todoList={todoList} />
            </div>
        </>
    )
}