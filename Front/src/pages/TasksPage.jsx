import {Filters} from '../components/Filters'
import {TaskCard} from '../components/TaskCard'

export function TasksPage() {
  return (
    <div>
      <Filters/>
      <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        </div>
      </main>
    </div>
  )
}