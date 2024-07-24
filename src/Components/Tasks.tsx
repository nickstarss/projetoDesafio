import styles from './Tasks.module.css'

export interface TaskType {
    id: number,
    content: string;
}

export default function Tasks(){
    
    return(
        <>
            <div className={styles.container}>

                <div className={styles.subcontainer1}>
                    <p>Tarefas criadas</p>
                    <span>2</span>
                </div>

                <div className={styles.subcontainer2}>
                    <p className={styles.concluida}>Concluídas</p>
                    <span>0</span>
                </div>

            </div>
            <hr color= '#333333'/>
        </>
    )
}