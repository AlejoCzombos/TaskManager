import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useLogin } from "../Context/login";
import { format } from "date-fns";
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
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { isLogin } = useLogin();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getTask() {
      if (params.id) {
        const res = await getTaskById(params.id);
        const data = await res.json();
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("date", formatDate(data.date));
        setValue("important", data.important);
        setValue("finished", data.finished);
      }
    }
    getTask();
  }, []);

  const onSubmit = handleSubmit(async (value) => {
    if (!isLogin) {
      toast.error("Inicie sesión para crear una tarea");
      reset();
      return;
    }

    let response;
    if (params.id) {
      const newTask = { ...value, id: params.id };
      response = updateTask(newTask);
    } else {
      response = createTask(value);
    }

    toast.promise(response, {
      loading: params.id ? "Actualizando..." : "Creando...",
      success: params.id ? <b>Tarea actualizada!</b> : <b>Tarea creada!</b>,
      error: <b>Error al {params.id ? "actualizar" : "crear"} la tarea 😓</b>,
    });

    const res = await response;

    navigate("/");
  });

  function formatDate(inputDate) {
    const parsedDate = new Date(inputDate);
    return format(parsedDate, "yyyy-MM-dd");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={onSubmit}>
        <h1 className="text-center text-white font-bold text-3xl mb-4">
          Creación de Tareas
        </h1>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 md:text-sm text-xl font-medium text-white"
          >
            Título
          </label>
          <input
            autoFocus
            type="title"
            id="title"
            className=" border-2 md:text-sm text-xl rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90 focus:outline-none"
            placeholder="Desarrollar aplicación web con React"
            {...register("title", {
              required: "El título es requerido",
              maxLength: {
                value: 50,
                message: "El título puede tener un máximo de 50 caracteres",
              },
              minLength: {
                value: 5,
                message: "El título tiene que tener mínimo 5 caracteres",
              },
            })}
          />
          {errors.title && (
            <span className="md:text-sm text-xl text-red-400">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 md:text-sm text-xl font-medium text-white"
          >
            Descripción
          </label>
          <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full min-h-16 max-h-32 md:text-sm text-xl rounded-xl border-2 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90 focus:outline-none"
            placeholder="Desarrollar aplicación de tareas con React, Spring Boot y PostgreSQL"
            {...register("description", {
              maxLength: {
                value: 250,
                message:
                  "La descripción puede tener un máximo de 50 caracteres",
              },
              minLength: {
                value: 5,
                message: "El titulo tiene que tener mínimo 5 caracteres",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="md:text-sm text-xl text-red-400">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="block mb-2 md:text-sm text-xl font-medium text-white"
          >
            Fecha
          </label>
          <input
            type="date"
            id="date"
            className=" border-2 md:text-sm text-xl rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90 focus:outline-none"
            placeholder="Desarrollar aplicación web con React"
            {...register("date", {
              required: "La fecha es requerida",
              validate: (value) => {
                const date = new Date(value);
                const maxDate = new Date(2100, 1, 1);
                const today = new Date(2020, 1, 1);
                if (date < today) {
                  return "La fecha no puede ser anterior al 2020";
                }
                if (date > maxDate) {
                  return "La fecha no puede ser mayor al 2100";
                }
                return true;
              },
            })}
          />
          {errors.date && (
            <span className="md:text-sm text-xl text-red-400">
              {errors.date.message}
            </span>
          )}
        </div>

        <div className="flex justify-between p-4 mb-4 bg-zinc-700 rounded-xl">
          <label
            htmlFor="important"
            className="ms-2 md:text-sm text-xl font-medium text-gray-300 cursor-pointer"
          >
            Importante
          </label>
          <input
            id="important"
            type="checkbox"
            className="md:size-4 size-7 rounded focus:ring-green-500/90 focus:border-green-500/90 focus:outline-none ring-offset-zinc-600 focus:ring-offset-zinc-600 focus:ring-2 bg-zinc-700 border-zinc-600"
            {...register("important")}
          />
        </div>

        <div className="flex justify-between p-4 mb-4 bg-zinc-700 rounded-xl">
          <label
            htmlFor="finished"
            className="ms-2 md:text-sm text-xl font-medium text-gray-300 cursor-pointer"
          >
            Finalizado
          </label>
          <input
            id="finished"
            type="checkbox"
            className="md:size-4 size-7 rounded focus:ring-green-500/90 focus:border-green-500/90 focus:outline-none ring-offset-zinc-600 focus:ring-offset-zinc-600 focus:ring-2 bg-zinc-700 border-zinc-600"
            {...register("finished")}
          />
        </div>

        <button className="w-full bg-green-500/90 text-white md:text-lg text-2xl font-semibold hover:bg-green-400/90 p-2 px-3.5 rounded-xl">
          {params.id ? "Actualizar tarea" : "Crear tarea"}
        </button>
      </form>
      {params.id && (
        <button className="mt-3 cursor-pointer w-full bg-red-500/90 md:text-lg text-2xl text-white font-semibold hover:bg-red-400/90 p-2 px-3.5 rounded-xl">
          Eliminar tarea
        </button>
      )}
    </div>
  );
}
