import './global.css'
import Header from './Components/Header'
import NewTask from './Components/NewTask'
import TaskCount from './Components/TaskCount'
import { TaskType } from './Components/TaskCount'
import Task from './Components/Task'

function App() {

  const tasks:TaskType[] = [
    {
      id: 1,
      content: 'Seja você mesmo'
    },
    {
      id: 2,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    }
  ]

  return (
    <>
      <Header/>
      <NewTask/>
      <TaskCount/>
      {tasks.map(task => {
        return(
          <Task
            key={task.id}
            id= {task.id}
            content={task.content}
          />
        )
      })}
    </>
  )
}

export default App