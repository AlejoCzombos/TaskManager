import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../App.css'

export function SideMenuItem({children, to, text, ...props}) {
  
  const location = useLocation();
  const currentPath = location.pathname;

  const [active, setActive] = useState(currentPath === to);

  useEffect(() => {
    if (currentPath === to && !active) {
      setActive(true);
    } else if (currentPath !== to && active) {
      setActive(false);
    }
  }, [currentPath, to, active]);

  return (
    <Link className={`${ active 
      ? "active font-semibold text-white fill-zinc-50 py-3.5 bg-zinc-600" 
      : "text-zinc-500 fill-zinc-500"}
      sideMenuItem
      flex items-center space-x-5 p-3 px-8
      text-sm hover:font-semibold
      hover:text-zinc-300
      hover:fill-zinc-300
      hover:bg-zinc-600 
      transition-all duration-200 ease-in`}
      to={to}
      {...props}
    >
        {children}
        <span>{text}</span>
    </Link>
  )
}
