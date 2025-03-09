import TaskItem from "@/components/taskItem/TaskItem";
import { TaskItemProps } from "@/types/index";
import { getTask } from "@/services/Task.service";

const Home = async () => {
  const TaskItems: TaskItemProps[] = await getTask();

  return (
    <div className="h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-extrabold text-white mb-6">Task Tracker</h1>
      
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TaskItems.slice(0, 8).map((item: TaskItemProps) => (
          <TaskItem
            key={item.id}
            userId={item.userId}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
