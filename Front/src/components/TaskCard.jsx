import {Link} from 'react-router-dom'

export function TaskCard() {
  return (
      <div class="border-2 border-zinc-600 rounded-xl 
      bg-zinc-700
      h-48 w-50 p-4
      text-white
      flex flex-col justify-between">
        <div>
          <h2 className="text-lg mb-1.5 font-bold">Aprender Testing</h2>
          <p className="text-sm font-light">Aprender JUnit en Spring Boot para probar REST API</p>
        </div>

        <div className="flex flex-row justify-between">
          
          <div className="">
            <p className=" text-xs font-light mb-2">20/10/2000</p>
            <a href="#" className="text-sm bg-green-500 rounded-full p-1">Completada</a>
          </div>

          <div className="flex flex-row items-end mb-1 gap-2.5">
            <Link to={"/tasks/:4"}>
              <PenIcon className="size-5 fill-zinc-500 hover:fill-white transition hover:scale-125"/>
            </Link>
            <Link>
              <TrashIcon className="size-5 fill-zinc-500 hover:fill-red-500 transition hover:scale-125"/>
            </Link>
          </div>
        </div>
      </div>
  )
}

function TrashIcon(props) {
  return (
    <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    height="16" 
    width="14" 
    viewBox="0 0 448 512">
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
    </svg>
  )
}

function PenIcon(props) {
  return(
    <svg 
    {...props	}
    xmlns="http://www.w3.org/2000/svg" 
    height="16" 
    width="16" 
    viewBox="0 0 512 512">
      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
    </svg>
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