import {Navigation} from '../components/Navigation'
import {useForm} from 'react-hook-form'

export function TasksFormPage() {

  const {register, handleSubmit, formState: {errors}, setValue} = useForm();

  const onSubmit = handleSubmit((value) => {
    console.log(value)
  })

  return (
    <div>
      <Navigation/>
      <h1 className='text-center'>TasksFormPage</h1>

      <form 
      className='max-w-md mx-auto'
      onSubmit={onSubmit}
      >
        
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Título:</label>
        <input 
        type="title" 
        id="title" 
        className=" border-2 text-sm rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Título" 
        {...register("title", {
          required: "El título es requerido",
          maxLength: {
            value: 50,
            message: "El título tiene que tener un maximo de 50 caracteres"
          },
          minLength: {
            value: 5,
            message: "El título tiene que tener mínimo 5 caracteres"
          }
        })}
        />
        { errors.title && <span className='text-sm text-red-400'>{errors.title.message}</span> }
      </div>

      <div className="mb-5">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Descripción</label>
        <textarea 
        id="description" 
        rows="4" 
        className="block p-2.5 w-full text-sm rounded-xl border-2 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Descripción"
        {...register("description", {
          maxLength: {
            value: 250,
            message: "La descripción puede tener un maximo de 50 caracteres"
          },
          minLength: {
            value: 5,
            message: "El titulo tiene que tener mínimo 5 caracteres"
          }
        })}
        ></textarea>
        { errors.description && <span className='text-sm text-red-400'>{errors.description.message}</span> }
      </div>

        <div className="flex justify-between p-4 mb-4 bg-zinc-700 rounded-xl">
          <label htmlFor="important" className="ms-2 text-sm font-medium text-gray-300">Importante</label>
          <input 
          id="important" 
          type="checkbox" 
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-zinc-600 focus:ring-offset-zinc-600 focus:ring-2 bg-zinc-700 border-zinc-600"
          {...register("important")}
          />
        </div>

        <div className="flex justify-between p-4 mb-4 bg-zinc-700 rounded-xl">
          <label htmlFor="finished" className="ms-2 text-sm font-medium text-gray-300">Finalizado</label>
          <input 
          id="finished" 
          type="checkbox" 
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-zinc-600 focus:ring-offset-zinc-600 focus:ring-2 bg-zinc-700 border-zinc-600"
          {...register("finished")}
          />
        </div>

        <button className=' bg-zinc-600 p-2 rounded-xl'>Crear tarea</button>

      </form>
    </div>
  )
}