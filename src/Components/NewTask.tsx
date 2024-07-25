import styles from './NewTask.module.css'
import plus from '../assets/plus.svg'

export default function NewTask(){

    return( 
        <form className={styles.formulario}>
            <textarea placeholder='Adicione uma nova tarefa'/>
            <button type='submit'>Criar <img src={plus}/></button>
        </form>
    )
}