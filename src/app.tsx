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
    <div className='flex gap-8'>
      <div className='w-1/4 max-w-sm  bg-dark-blue rounded-lg shadow'>
        <UserCard/>
        <div className="flex flex-col gap-5 p-6 text-left">
          <Filter />
        </div>
      </div>

      <div className='w-3/4 grid grid-cols-3 grid-rows-2 gap-6'>
        {
          tasks.map((task: Task) => {
            return <TaskCard title={task.title} current={task.timeframes.daily.current} previous={task.timeframes.daily.previous} />
          })
        }
      </div>
    </div>
  )
}


