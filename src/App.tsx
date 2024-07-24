import './global.css'
import Header from './Components/Header'
import NewTask from './Components/NewTask'
import Tasks from './Components/Tasks'
import { TaskType } from './Components/Tasks'
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
      <Tasks/>
      {tasks.map(task => {
        return(
          <Task
            key={task.id}
            content={task.content}
          />
        )
      })}
    </>
  )
}

export default App