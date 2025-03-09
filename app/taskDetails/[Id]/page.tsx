import TaskDet from "../TaskDet";

interface Iprops {
  params: { Id: number };
}

const Page = (prop: Iprops) => {
  const IdTask = prop.params.Id;

  return (
    <div className="flex flex-col items-center justify-center h-screen  p-6">
      <h1 className="text-4xl font-extrabold text-white mb-6">Task Details</h1>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <TaskDet Id={IdTask} />
        </div>
      </div>
    </div>
  );
};

export default Page;
