import React from "react";
import Button from "@atlaskit/button";
import { useState } from "react";
import Lozenge from "@atlaskit/lozenge";

export default function Task({task}) {
    const [completed, setCompleted] = useState(0);
    const handleTaskClick = () => {
        switch (completed) {
            case 0: setCompleted(1)
                break;
            case 1: setCompleted(2)
                break;
            case 2: setCompleted(0)
                break;
            default: setCompleted(0);
        }
    }
    return (
        <Button
        onClick={handleTaskClick} 
        className={`task-btn ${ completed === 1 ? "task-btn-doing" : completed === 2 ? "task-btn-done" : "task-btn-todo"}`}
        shouldFitContainer
        iconAfter={
            completed === 0 ?
            <span className="task-lozenge">
                <Lozenge>To Do</Lozenge>
            </span>
            : completed === 1 ?
            <span className="task-lozenge">
                <Lozenge>Doing</Lozenge>
            </span>
            :
            <span className="task-lozenge">
                <Lozenge>Done</Lozenge>
            </span>
        }
        >
            {task.name}
        </Button>
    )
}