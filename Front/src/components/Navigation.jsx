import {Link} from 'react-router-dom'

export function Navigation() {
    return (
        <div className='flex justify-between'>
            <Link to="tasks">
                <h2 className='text-lg'>Tareas</h2>
            </Link>
            <Link to="tasks-create">
                <h2 className='text-lg'>Crear Tarea</h2>  
            </Link>
        </div>
    )
}