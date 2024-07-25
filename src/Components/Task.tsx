import styles from "./Task.module.css"
import trash from "../assets/Trash.svg"

export interface TaskType{
    id: number,
    content: string
}

interface TaskProps{
    task: TaskType;
}

export default function Task({id, content}:TaskType){
    return(
        <form className={styles.formulario}>
            <input type="checkbox"/>
            <div className={styles.conteudo}>
                <p>{content}</p>
            </div>
            <img src={trash}/>
        </form>
    )
}