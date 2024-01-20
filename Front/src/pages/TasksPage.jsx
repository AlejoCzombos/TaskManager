import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { TaskCreate } from "../components/TaskCreate";
import { getAllTasks } from "../api/task.api";
import { useLogin } from "../Context/login";

export function TasksPage() {
  const { isLogin } = useLogin();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      if (isLogin) {
        const res = await getAllTasks();
        const data = await res.json();
        setTasks(data);
      } else {
        setTasks([]);
      }
    }
    getTasks();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 m-5">
      {tasks.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
      <TaskCreate />
    </div>
  );
}
