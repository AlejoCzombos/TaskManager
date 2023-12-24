import {Filters} from '../components/Filters'

export function TasksPage() {
  return (
    <div>
      <Filters/>
      <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 class="tracking-tight text-sm font-medium">Task 1</h3>
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 w-4 h-4 text-gray-500 dark:text-gray-400"
            color="green"
          >
            Completed
          </div>
        </div>
        <div class="p-6">
          <p class="text-xs text-gray-500 dark:text-gray-400">Task description goes here...</p>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 class="tracking-tight text-sm font-medium">Task 2</h3>
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 w-4 h-4 text-gray-500 dark:text-gray-400"
            color="red"
          >
            Incomplete
          </div>
        </div>
        <div class="p-6">
          <p class="text-xs text-gray-500 dark:text-gray-400">Task description goes here...</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Created on: 24th December, 2023</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Priority: High</p>
        </div>
      </div>
    </div>
  </main>
  </div>
  )
}