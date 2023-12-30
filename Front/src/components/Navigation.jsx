import {Link} from 'react-router-dom'

export function Navigation() {
    return (
        <div className='flex justify-between items-center m-4'>
            <Link to="/tasks" className=' text-white font-bold text-3xl'>
                <h1>Tareas</h1>
            </Link>
            <Link to="/tasks-create">
                <PlusIcon className="
                fill-zinc-500 bg-zinc-800/60
                border-2 border-zinc-800
                rounded-full
                transition hover:scale-125
                size-9 p-1.5"/>
            </Link>
        </div>
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