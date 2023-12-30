import { Children } from 'react'
import {Link} from 'react-router-dom'

export function SideMenuItem({children, to, text, ...props}) {
  return (
    <Link className='flex items-center space-x-5 p-3 px-8
    text-sm hover:font-semibold
    text-zinc-500 hover:text-white
    fill-zinc-500 hover:fill-white
    hover:bg-zinc-600 hover:py-5
    transition duration-500 ease-in'
     to={to}
     {...props}
    >
        {children}
        <span>{text}</span>
    </Link>
  )
}
