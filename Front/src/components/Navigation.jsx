import { Link } from "react-router-dom";
import "../App.css";

export function Navigation() {
  return (
    <div className="flex justify-between items-center m-5 mb-6">
      <Link
        to="/"
        className=" text-white font-bold md:text-3xl text-5xl navigation"
      >
        <h1>Tareas</h1>
      </Link>
      <Link to="/tasks-create">
        <PlusIcon
          className="
                fill-zinc-500 bg-zinc-800/60
                md:border-2 border-4 border-zinc-800
                rounded-full
                transition hover:scale-125
                md:size-9 md:p-1.5
                size-14 p-2"
        />
      </Link>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
    >
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );
}
