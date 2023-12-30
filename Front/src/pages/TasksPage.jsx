import {TaskCard} from '../components/TaskCard'
import {TaskCreate} from '../components/TaskCreate'
import {Navigation} from '../components/Navigation'

export function TasksPage() {
  return (
    <div>
        <Navigation/>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 m-5">
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCreate/>
        </div>
    </div>
  )
}