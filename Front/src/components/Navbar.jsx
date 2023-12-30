import React from 'react'
import {Link} from 'react-router-dom'

export function Navbar() {
  return (
    <div key="1" className="bg-[#202020] min-h-screen p-2 md:p-8">
      <div className="flex flex-col justify-between md:w-[300px] h-[100vh]">
          <div className="flex items-center mb-2 md:mb-6">
            {/*<Avatar alt="User profile" src="/placeholder.svg?height=40&width=40"/>*/}
            <span className="text-white font-bold">Maclinz</span>
          </div>
          <nav className="flex flex-col space-y-2">
            <Link className="flex items-center space-x-2 text-green-500" href="#">
              <ListIcon className="h-6 w-6" />
              <span>All Tasks</span>
            </Link>
            <Link className="flex items-center space-x-2 text-gray-400" href="#">
              <StarIcon className="h-6 w-6" />
              <span>Important!</span>
            </Link>
            <Link className="flex items-center space-x-2 text-gray-400" href="#">
              <CheckIcon className="h-6 w-6" />
              <span>Completed!</span>
            </Link>
            <Link className="flex items-center space-x-2 text-gray-400" href="#">
              <BoldIcon className="h-6 w-6" />
              <span>Do It Now</span>
            </Link>
          </nav>
          <button className="mt-2 md:mt-4">Sign In / Sign Out</button>
        </div>
        </div>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function BoldIcon(props) {
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
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  )
}


function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}