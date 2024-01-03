import {Link} from 'react-router-dom'

export function TaskCreate() {
  return (
    <Link to="/tasks-create" class="border-2 border-dashed border-zinc-700 rounded-xl 
      bg-zinc-900 hover:bg-zinc-800
      h-48 w-50
      text-white
      transition hover:scale-105
      flex justify-center items-center">
        <div className="flex items-center space-x-1">
            <PlusIcon className="fill-zinc-500 size-5"/>
            <h2 className="text-xs font-bold">Agregar Tarea</h2>
        </div>
      </Link>
  )
}

function PlusIcon(props) {
    return (
      <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      height="16" 
      width="14" 
      viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
      </svg>
    )
  }