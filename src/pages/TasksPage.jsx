import { useTasks } from "../context/TasksContext";
import { useEffect } from "react";
import TaskCard from '../components/TaskCard'

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No tasks </h1>;

  return (
    <div className="grid h-[calc(100vh-100px)] items-start">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id}/>
      ))}
    </div>
    </div>
  );
};

export default TasksPage;
