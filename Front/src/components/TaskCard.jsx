import { Link } from "react-router-dom";
import {} from "../api/task.api";

export function TaskCard({ task }) {
  const finishedStyle = task.finished ? " bg-green-500/90" : " bg-red-500/90";

  const changeStatusTask = () => {};

  return (
    <div
      className="border-2 border-zinc-600 rounded-xl 
      bg-zinc-700
      h-48 w-50 p-4
      text-white
      flex flex-col justify-between"
    >
      <div>
        <h2 className="text-lg mb-1.5 font-bold">{task.title}</h2>
        <p className="text-sm font-light">{task.description}</p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="">
          <p className="text-sm font-normal mb-2">{task.creation_date}</p>
          <Link
            onClick={() => {
              changeStatusTask();
            }}
            className={`text-sm rounded-full p-1 px-2 ${finishedStyle}`}
          >
            {task.finished}
          </Link>
        </div>

        <div className="flex flex-row items-end mb-1 gap-2.5">
          <Link to={`/tasks/${task.id}`}>
            <PenIcon className="size-5 fill-zinc-500 hover:fill-white transition hover:scale-125" />
          </Link>
          <Link>
            <TrashIcon className="size-5 fill-zinc-500 hover:fill-red-500 transition hover:scale-125" />
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
