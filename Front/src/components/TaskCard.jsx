export function TaskCard() {
  return (
        <div
    class="bg-card text-card-foreground shadow-sm border border-gray-200 rounded-lg p-4 max-w-md mx-auto"
    data-v0-t="card">
    <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="tracking-tight font-bold text-lg">Task Title</h3>
        <p class="text-sm text-gray-500">Task Description</p>
    </div>
    <div class="p-6 flex flex-col gap-2 mt-4">
    <div className="flex items-center gap-2">
            <FlagIcon className="w-4 h-4 text-red-500" />
            <span className="text-sm">Priority</span>
            </div>
        <div class="flex items-center gap-2">
        <div class="inline-flex items-center border w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-200 text-blue-700 px-2 py-1 rounded-md text-xs">
            Incomplete
        </div>
        <div class="inline-flex items-center border w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-200 text-yellow-700 px-2 py-1 rounded-md text-xs">
            In Progress
        </div>
        <div class="inline-flex items-center border w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-200 text-green-700 px-2 py-1 rounded-md text-xs">
            Complete
        </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <CalendarDaysIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Creation Date</span>
            </div>
    </div>
    </div>
  )
}

function CalendarDaysIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    )
  }

function FlagIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" x2="4" y1="22" y2="15" />
      </svg>
    )
  }