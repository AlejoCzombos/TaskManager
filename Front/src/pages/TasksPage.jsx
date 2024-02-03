import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { TaskCreate } from "../components/TaskCreate";
import {
  getAllTasks,
  getCompletedTasks,
  getImportantTasks,
  getIncompletedTasks,
} from "../api/task.api";
import { useLogin } from "../Context/login";
import { useParams } from "react-router-dom";

export function TasksPage() {
  const { isLogin } = useLogin();
  const [tasks, setTasks] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function getTasks() {
      if (isLogin) {
        let res;
        switch (params.filter) {
          case "all":
            res = await getAllTasks();
            break;
          case "important":
            res = await getImportantTasks();
            break;
          case "completed":
            res = await getCompletedTasks();
            break;
          case "incompleted":
            res = await getIncompletedTasks();
            break;
          default:
            res = await getAllTasks();
        }

        const data = await res.json();
        setTasks(data);
      } else {
        setTasks([]);
      }
    }

    getTasks();
  }, [isLogin, params.filter]);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 m-5">
      {tasks.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
      <TaskCreate />
    </div>
  );
}
