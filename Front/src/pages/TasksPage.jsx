import {Navbar} from '../components/Navbar'
import {TaskCard} from '../components/TaskCard'

export function TasksPage() {
  return (
    <div>
      <div key="1" className="bg-[#202020] min-h-screen p-2 md:p-8">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <Navbar/>
        {/*<TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>*/}
        </div>
      </div>
    </div>
  )
}