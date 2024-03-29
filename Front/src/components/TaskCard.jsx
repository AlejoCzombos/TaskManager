import { Link, useNavigate } from "react-router-dom";
import { updateTaskCompleted, deleteTask } from "../api/task.api";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { useState } from "react";

export function TaskCard({ task }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const finishedStyle = task.finished
    ? "bg-green-500/90 hover:bg-green-400/90"
    : "bg-red-500/90 hover:bg-red-400/90";

  const navigate = useNavigate();

  const HandleUpdateTaskCompleted = async (taskId) => {
    if (isUpdating) return;

    const res = updateTaskCompleted(taskId);
    setIsUpdating(true);

    toast.promise(res, {
      loading: "Actualizando estado...",
      success: <b>Tarea actualizada!</b>,
      error: <b>Error al actualizar la tarea 😓</b>,
    });
    try {
      const data = await res;
      navigate("/");
    } catch (error) {
      console.error("Error during update task:", error);
    }
  };

  const HandleDeleteTask = async (taskId) => {
    if (isDeleting) return;

    const response = deleteTask(taskId);
    setIsDeleting(true);

    toast.promise(response, {
      loading: "Eliminando...",
      success: <b>Tarea eliminada!</b>,
      error: <b>Error al eliminar la tarea 😓</b>,
    });

    const res = await response;

    navigate("/");
  };

  function formatDate(inputDate) {
    const parsedDate = new Date(inputDate);
    return format(parsedDate, "dd/MM/yyyy");
  }

  return (
    <div
      className="border-2 rounded-xl border-zinc-600
      bg-zinc-700
      md:h-48 h-64 w-50 md:p-4 p-6
      text-white
      flex flex-col justify-between
      relative"
    >
      {task.important && (
        <ImportantIcon className="md:size-7 size-9 fill-white border-2 p-[4px] rounded-full absolute top-4 right-4" />
      )}
      <div>
        <h2
          className={`md:text-lg text-2xl text-white md:mb-1 mb-2.5 font-bold line-clamp-1 max-w-[90%]`}
        >
          {task.title}
        </h2>
        <p className="md:text-sm text-xl font-light line-clamp-3">
          {task.description}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <p className="md:text-sm text-xl font-normal mb-2">
            {formatDate(task.date)}
          </p>
          <Link
            onClick={() => {
              HandleUpdateTaskCompleted(task.id);
            }}
            className={`md:text-sm text-xl rounded-full p-1 px-2 ${finishedStyle}`}
          >
            {task.finished ? "Completado" : "En Proceso"}
          </Link>
        </div>

        <div className="flex flex-row items-end mb-1 gap-2.5">
          <Link to={`/tasks-edit/${task.id}`}>
            <PenIcon className="md:size-5 size-9 md:mr-0 mr-3 fill-zinc-500 hover:fill-white transition hover:scale-125" />
          </Link>
          <Link
            onClick={() => {
              HandleDeleteTask(task.id);
            }}
          >
            <TrashIcon className="md:size-5 size-9 fill-zinc-500 hover:fill-red-500 transition hover:scale-125" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );
}

function PenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      viewBox="0 0 512 512"
    >
      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
    </svg>
  );
}
function ImportantIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512">
      <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </svg>
  );
}
