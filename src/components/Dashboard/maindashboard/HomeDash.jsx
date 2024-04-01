import React from "react";
import FilterHeader from "./filterHeader";
import { Button } from "@material-tailwind/react";
import { Task } from "../Modals/Task";
import Sortby from "./Sortby";
import TaskCard from "../TaskCardDash/TaskCard";
import TaskPrev from "../TaskCardDash/TaskPrev";
import { useSelector } from "react-redux";

// task type data
const taskTypeData = [
  {
    type: "Pending",
  },
  {
    type: "In Progress",
  },
  {
    type: "Completed",
  },
  {
    type: "Deployed",
  },
  {
    type: "Deferred",
  },
];

export default function HomeDash() {
  const tasksData = useSelector((state) => state.tasks.taskData);
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => setOpenModal(!openModal);

  return (
    <div className="w-full min-h-[70vh] flex flex-col shadow-lg gap-6 lg:p-8 p-3 border-2 border-white_color rounded-md">
      <div className="flex justify-between w-full items-start">
        <div className="flex flex-col gap-4">
          <FilterHeader />
          <Sortby />
        </div>

        <Button
          onClick={handleModal}
          className="bg-btn_color capitalize px-6 py-1.5 lg:px-16 lg:py-3 text-md font-medium rounded-[5px]"
        >
          Add New Task
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {taskTypeData.map((taskData, index) => (
          <TaskCard key={index} taskType={taskData.type}>
            <div className="w-full h-full flex justify-start flex-col gap-6 p-2">
              {tasksData?.length === 0 ? (
                <p className="text-md font-medium text-black_color text-center capitalize">
                  Currently no {taskData?.type} task
                </p>
              ) : (
                <>
                  {tasksData.map((task) => {
                    const taskType = taskData?.type === task?.type;
                    if (taskType) {
                      return (
                        <>
                          {task?.tasks?.map((taskValue, taskIndex) => {
                            return (
                              <TaskPrev
                                key={taskIndex}
                                assignee={taskValue?.assignee}
                                desc={taskValue?.description}
                                priority={taskValue?.priority}
                                title={taskValue?.title}
                                taskType={task?.type}
                                id={taskValue?.id}
                                team={taskValue?.team}
                              />
                            );
                          })}
                        </>
                      );
                    }
                  })}
                </>
              )}
            </div>
          </TaskCard>
        ))}
      </div>

      {/* Modal */}
      {openModal ? (
        <Task
          taskTitle={"Add New Task "}
          isOpen={openModal}
          onHandleOpen={handleModal}
        />
      ) : null}
    </div>
  );
}
