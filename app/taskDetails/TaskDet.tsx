"use client";
import { TaskItemProps } from "@/types";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import Loading from "../loading";
import Errors from "../error";
import Image from "next/image";
import Task from "@/public/Task.jpg";

const TaskDet: FC<{ Id: number }> = ({ Id }) => {
  const [taskItem, setTaskItem] = useState<TaskItemProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); 
  const router = useRouter();

  useEffect(() => {
    const getTask = async () => {
      if (!Id || Id <= 0) {
        router.push("/not-found");
        return;
      }

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`);

        if (response.status === 404) {
          router.push("/not-found");
          return;
        }

        const data: TaskItemProps = await response.json();
        setTaskItem(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getTask();
  }, [Id, router]);

  if (loading) return <Loading />;
  if (error) return <Errors error={error} reset={() => setError(null)} />;
  if (!taskItem) return null;

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <div className="flex flex-row w-full h-96">
      
        <div className="w-1/2 h-full">
          <Image
            src={Task.src}
            alt="Task"
            width={500}
            height={500}
            className="rounded-r-lg object-cover h-full w-full"
          />
        </div>

        
        <div className="w-1/2 h-full flex flex-col justify-center p-4 space-y-4 bg-gray-50 rounded-l-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Task Details</h2>
          <p className="text-lg text-gray-500">
            <strong className="font-semibold text-gray-800">ID:</strong> {taskItem.id}
          </p>
          <p className="text-lg text-gray-500">
            <strong className="font-semibold text-gray-800">Title:</strong> {taskItem.title}
          </p>
          <p className="text-lg text-gray-500">
            <strong className="font-semibold text-gray-800">Completed:</strong> {taskItem.completed ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDet;
