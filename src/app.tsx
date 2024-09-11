import { useEffect, useState } from 'preact/hooks'
import './app.css'
import { TaskCard } from './components/task-card'
import { UserCard } from './components/user-card'
import { Filter } from './components/filter';
import { Task } from './types';

export function App() {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    fetch('/assets/data.json')
      .then((response) => {
       response.json().then(setTasks)
      });
  }, [])

  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      <div className='lg:w-1/4 w-full  bg-dark-blue rounded-lg shadow'>
        <UserCard/>
        <Filter />
      </div>

      <div className='lg:w-3/4 w-full flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-6'>
        {
          tasks.map((task: Task) => {
            return <TaskCard title={task.title} current={task.timeframes.daily.current} previous={task.timeframes.daily.previous} />
          })
        }
      </div>
    </div>
  )
}


