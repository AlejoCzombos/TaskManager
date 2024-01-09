import {useForm} from 'react-hook-form'
import {AuthLogin} from '../api/auth.api'

export function LoginPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = handleSubmit((value) => {
      console.log(value)

      const token = AuthLogin(value)
      console.log(value)
    })

  return (
    <div
  onClick={onClose}
  className={`fixed inset-0 flex justify-center items-center
    transition-colors ${open ? "visible bg-black/20" : "invisible"}
  `}
  >
    <div
    onClick={(e) => e.stopPropagation()} 
    className={`bg-zinc-700 rounded-xl shadow p-5 transition-all
    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
    `}>
      
      <PlusIcon
      onClick={onClose}
      className="
      fill-zinc-500
        flex justify-center
        rounded-full
        transition hover:scale-125
        size-9 p-1.5 rotate-45"/>

      <h1 className='text-center text-white text-2xl'>Iniciar Sesión</h1>

      <form 
      className='max-w-md w-screen mx-auto'
      onSubmit={onSubmit}
      >
    
          <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Correo electrónico:</label>
          <input 
          type="username" 
          id="username" 
          className=" border-2 text-sm rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="ejemplo@gmail.com" 
          {...register("username", {
              required: "El email es requerido",
              pattern: {
                value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                message: "Email invalido"
              },
              maxLength: {
              value: 50,
              message: "El email puede tener un maximo de 50 caracteres"
              },
              minLength: {
              value: 5,
              message: "El email tiene que tener mínimo 5 caracteres"
              }
          })}
          />
          { errors.username && <span className='text-sm text-red-400'>{errors.username.message}</span> }
          </div>

          <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña:</label>
          <input 
          type="password" 
          id="password" 
          className=" border-2 text-sm rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="********" 
          {...register("password", {
              required: "La contraseña es requerida",
              maxLength: {
              value: 255,
              message: "La contraseña puede tener un maximo de 255 caracteres"
              }
          })}
          />
          { errors.password && <span className='text-sm text-red-400'>{errors.password.message}</span> }
          </div>

          <button className=' bg-zinc-600 p-2 rounded-xl'>Iniciar sesión</button>

      </form>

    </div>
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