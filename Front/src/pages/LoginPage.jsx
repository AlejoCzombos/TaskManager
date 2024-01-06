import {useForm} from 'react-hook-form'

export function LoginPage() {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm();

    const onSubmit = handleSubmit((value) => {
      console.log(value)
    })

  return (
    <div>

      <h1 className='text-center text-white text-2xl'>Iniciar Sesión</h1>

      <form 
      className='max-w-md mx-auto'
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
                value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/,
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
              required: "El email es requerido",
              pattern: {
                value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/,
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
          { errors.password && <span className='text-sm text-red-400'>{errors.password.message}</span> }
          </div>
      </form>

    </div>
  )
}