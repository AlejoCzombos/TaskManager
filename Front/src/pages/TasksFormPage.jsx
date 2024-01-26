import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useLogin } from "../Context/login";
import {
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} from "../api/task.api";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isLogin } = useLogin();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getTask() {
      if (params.id) {
        const res = await getTaskById(params.id);
        const data = await res.json();
        reset(data);
      }
    }
    getTask();
  }, []);

  const onSubmit = handleSubmit(async (value) => {
    if (!isLogin) {
      toast.error("Inicie sesión para crear una tarea");
      return;
    }

    if (params.id) {
      const res = await updateTask(value);
      toast.promise(res.json(), {
        loading: "Actualizando...",
        success: <b>Tarea actualizada!</b>,
        error: <b>Error al actualizar la tarea 😓</b>,
      });
      navigate("/");
    } else {
      const res = await createTask(value);
      toast.promise(res.json(), {
        loading: "Creando...",
        success: <b>Tarea creada!</b>,
        error: <b>Error al crear la tarea 😓</b>,
      });
      navigate("/");
    }
  });

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-white"
          >
            Título:
          </label>
          <input
            type="title"
            id="title"
            className=" border-2 text-sm rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90"
            placeholder="Título"
            {...register("title", {
              required: "El título es requerido",
              maxLength: {
                value: 50,
                message: "El título puede tener un maximo de 50 caracteres",
              },
              minLength: {
                value: 5,
                message: "El título tiene que tener mínimo 5 caracteres",
              },
            })}
          />
          {errors.title && (
            <span className="text-sm text-red-400">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-white"
          >
            Descripción
          </label>
          <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full min-h-16 max-h-32 text-sm rounded-xl border-2 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90"
            placeholder="Descripción"
            {...register("description", {
              maxLength: {
                value: 250,
                message:
                  "La descripción puede tener un maximo de 50 caracteres",
              },
              minLength: {
                value: 5,
                message: "El titulo tiene que tener mínimo 5 caracteres",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-400">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="flex justify-between p-4 mb-4 bg-zinc-700 rounded-xl">
          <label
            htmlFor="important"
            className="ms-2 text-sm font-medium text-gray-300 cursor-pointer"
          >
            Importante
          </label>
          <input
            id="important"
            type="checkbox"
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-zinc-600 focus:ring-offset-zinc-600 focus:ring-2 bg-zinc-700 border-zinc-600"
            {...register("important")}
          />
        </div>

        <div className="flex justify-between p-4 mb-4 bg-zinc-700 rounded-xl">
          <label
            htmlFor="finished"
            className="ms-2 text-sm font-medium text-gray-300 cursor-pointer"
          >
            Finalizado
          </label>
          <input
            id="finished"
            type="checkbox"
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-zinc-600 focus:ring-offset-zinc-600 focus:ring-2 bg-zinc-700 border-zinc-600"
            {...register("finished")}
          />
        </div>

        <button className="w-full bg-green-500/90 text-white font-semibold hover:bg-green-400/90 p-2 px-3.5 rounded-xl">
          {params.id ? "Actualizar tarea" : "Crear tarea"}
        </button>
      </form>
      {params.id && (
        <button className="mt-3 flex justify-end cursor-pointer bg-red-500/90 text-white font-semibold hover:bg-red-400/90 p-2 px-3.5 rounded-xl">
          Eliminar tarea
        </button>
      )}
    </div>
  );
}
