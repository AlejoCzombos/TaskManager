import {Navigation} from '../components/Navigation'
import {useForm} from 'react-hook-form'

export function TasksFormPage() {

  const {register} = useForm();

  return (
    <div>
      <Navigation/>
      <h1 className='text-center'>TasksFormPage</h1>
      <form className='max-w-md mx-auto'>
        
      <div className="mb-5">
        <label for="email" className="block mb-2 text-sm font-medium text-white">Título:</label>
        <input type="email" id="email" className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Título" />
      </div>

      <div className="mb-5">
        <label for="message" className="block mb-2 text-sm font-medium text-white">Descripción</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Descripción"></textarea>
      </div>

        <div className="flex justify-between p-4 bg-slate-600">
          <label htmlFor="important" className="ms-2 text-sm font-medium text-gray-300">Importante</label>
          <input id="important" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
        </div>

        <div className="flex justify-between p-4 bg-slate-600">
          <label htmlFor="completed" className="ms-2 text-sm font-medium text-gray-300">Completado</label>
          <input id="completed" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
        </div>

      </form>
    </div>
  )
}