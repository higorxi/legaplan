"use client"
import { useState } from "react";
import Button from "../ui/button";
import Task from "./task";

export default function TodoList (){
    const [task, setTasks] = useState(0)

    return(
        <div>
            <div>
            <p>Suas tarefas de hoje</p>
            <div>
            <Task/>
            <Task/>
            <Task/>
            </div>
            <p>Tarefas finalizadas</p>
            <div>
            <Task/>
            </div>
            </div>
            <div>
                <Button
                />
            </div>
        </div>
    )
}