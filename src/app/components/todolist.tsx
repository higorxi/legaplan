import Button from "../ui/button";
import Task from "./task";

export default function TodoList (){
    return(
        <div>
            {/* Div dos todos */}
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
            <div>
                {/* onCLick abrir o modal */}
                <Button/>
            </div>
        </div>
    )
}