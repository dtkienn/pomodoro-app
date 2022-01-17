import React from "react";
import Task from './Task';
export default function TodoList({todoList}) {
    return (
        <>
        {
            todoList.map(task => <Task key={task.id} task={task}/>)
        }
        </>
    )
}