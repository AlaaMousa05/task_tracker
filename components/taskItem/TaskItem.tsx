import React from 'react';
import Image from 'next/image';
import done from '@/public/done.svg';
import undone from '@/public/klipartz.com.png';
import { TaskItemProps } from '@/types';
import Link from 'next/link';
import item from '@/public/item2.jpg';

const TaskItem = (prop: TaskItemProps) => {
  return (
    <div className="w-full max-w-xs p-4 bg-white text-blue-950 rounded-lg shadow-lg hover:shadow-2xl hover:scale-95 
    transition-transform duration-300">
      <Link href={`/taskDetails/${prop.id}`} className="block w-full">
        <div className="flex flex-col space-y-4">
          
          <div className="flex justify-between items-center ">
            <h3 className="text-lg font-semibold  flex-grow">{prop.title}</h3>
            <Image
              src={prop.completed ? done.src : undone.src}
              alt="Task state"
              width={30}
              height={30}
              className="rounded-full"
              priority
            />
          </div>

          
           <div className="mt-4 relative w-full h-32">
            <Image
              src={item}
              alt="Task image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TaskItem;
