import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../Core/Redux/Slices/TaskSlice";
import { EditTask } from "../Modals/EditTask";
import DeleteTask from "../Modals/DeleteTask";

export default function TaskPrev({
  title,
  priority,
  desc,
  assignee,
  taskType,
  id,
  team,
}) {
  const dispatch = useDispatch();
  const taskTypeUpdate = taskType === "Pending" ? "Assign" : taskType;

  const handleRemoveSpecificTask = (taskId) => {
    return dispatch(removeTask({ taskIdToRemove: taskId, taskType }));
  };

  const [isEditTask, setIsEditTask] = React.useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editTaskData, setEditTaskData] = React.useState([]);

  const handleEdit = () => {
    setIsEditTask(!isEditTask);
    const taskData = {
      id,
      title,
      priority,
      description: desc,
      assignee,
      team,
    };
    setEditTaskData(taskData);
  };

  const handleDelete = () => setIsDelete(!isDelete);

  return (
    <div className="flex flex-col gap-4 w-full p-3 bg-prev_card_bg rounded-md h-[250px] overflow-y-auto hidden-scroll">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-black_color">{title}</p>

        <p className="uppercase text-md font-medium text-white_color bg-btn_color px-2 py-1 rounded-[5px]">
          {priority}
        </p>
      </div>
      <hr className="border-2 border-[#5a5a5a] w-full rounded-md" />

      <p className="text-md font-medium text-black_color capitalize">{desc}</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-md font-bold text-black_color capitalize">
          {assignee}
        </p>

        <Menu>
          <MenuHandler>
            <EllipsisVertical className="text-white_color bg-btn_color w-8 h-8 rounded-md p-1 cursor-pointer" />
          </MenuHandler>
          <MenuList className="!max-w-[140px] !min-w-[140px] !bg-input_bg">
            <MenuItem
              onClick={() => handleEdit(editTaskData)}
              className="text-black_color text-md mb-1"
            >
              Edit
            </MenuItem>
            <hr className="border-1 border-white_color" />
            <MenuItem
              onClick={handleDelete}
              className="text-black_color text-md mt-1"
            >
              Delete Task
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div>
        <button className="text-md font-medium text-white_color capitalize bg-btn_color px-10 py-1 rounded-[5px]">
          {taskTypeUpdate}
        </button>

        {isEditTask && (
          <EditTask
            editTaskData={editTaskData}
            onHandleOpen={handleEdit}
            isOpen={isEditTask}
            taskTitle={"Edit Task"}
          />
        )}

        {isDelete && (
          <DeleteTask
            isDelete={isDelete}
            onDelete={() => handleRemoveSpecificTask(id)}
            onModalHandle={handleDelete}
            TaskTitle={title}
          />
        )}
      </div>
    </div>
  );
}
