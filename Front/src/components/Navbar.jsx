import React from 'react'
import {Link} from 'react-router-dom'

export function Navbar() {
  return (
    <div>
      <header className="flex justify-between h-16 px-4 border-b shrink-0 md:px-6">
            <nav className="flex items-center gap-6 text-lg font-medium">
              <Link to="tasks">
                <h2>TaskManager</h2>
              </Link>
              <Link to="tasks">
                <h2 className="text-gray-500 dark:text-gray-400">Tareas</h2>
              </Link>
              <Link to="tasks">
                <h2 className="text-gray-500 dark:text-gray-400">Estadisticas</h2>
              </Link>
            </nav>
            <div className="flex items-center">
              <button
                type="button"
                aria-pressed="false"
                data-state="off"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-10 px-3"
                aria-label="Toggle Dark Mode"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
              <button className="bg-">
                Iniciar Sesión
              </button>
            </div>
          </header>
    </div>
  )
}