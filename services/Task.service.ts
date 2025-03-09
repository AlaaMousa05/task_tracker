import { TaskItemProps } from "@/types";



const getTask = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos",
        {
            method: "GET", cache: 'no-store'
        });
    const data = (await res.json()) as TaskItemProps[];

    const taskItems: TaskItemProps[] = data.map(item => ({
        id: item.id,
        userId: item.userId,
        title: item.title,
        completed: item.completed
    }
    ));
    return taskItems;

}
export { getTask };