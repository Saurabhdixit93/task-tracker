import React from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

import { XIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../Core/Redux/Slices/TaskSlice";
import { generateRandomId } from "../../../Core/utils/Functions";

export function Task({ onHandleOpen, isOpen, taskTitle }) {
  const tasks = useSelector((state) => state.tasks.taskData);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    priority: "",
    assignee: "",
    team: "",
    id: generateRandomId(),
    createdAt: new Date().toISOString(),
  });

  // handle change inputs
  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ task: formData, type: "Pending" }));
    return onHandleOpen();
  };

  // handle reset
  const handleResetForm = () => {
    setFormData({
      title: "",
      description: "",
      priority: "",
      assignee: "",
      team: "",
    });
  };
  return (
    <Dialog
      open={isOpen}
      handler={onHandleOpen}
      className="rounded-none bg-white_color"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <DialogHeader className="uppercase text-2xl font-bold text-black_color">
          {taskTitle}
        </DialogHeader>

        <button
          onClick={onHandleOpen}
          className="cursor-pointer rounded-full p-1 border-2 border-black_color w-8 h-8 flex items-center justify-center"
        >
          <XIcon className="text-black_color w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <DialogBody className="bg-gradient-to-r from-primary_color to-secondary_color p-4">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-2 justify-between w-full">
              <label
                className="text-black_color w-1/4 capitalize text-lg font-medium "
                htmlFor="title"
              >
                Title:
              </label>
              <input
                required
                value={formData.title}
                onChange={handleChangeInputs}
                name="title"
                placeholder="Enter Title"
                id="title"
                type="text"
                className="bg-input_bg px-4 text-medium text-black_color py-2 border border-black_color rounded-md w-full outline-none placeholder:text-black_color"
              />
            </div>

            <div className="flex items-center gap-2 justify-between w-full ">
              <label
                className="text-black_color  w-1/4 capitalize text-lg font-medium "
                htmlFor="Description"
              >
                Description:
              </label>
              <textarea
                required
                value={formData.description}
                onChange={handleChangeInputs}
                name="description"
                placeholder="Enter Description"
                id="Description"
                type="text"
                className="resize-none !bg-input_bg px-4 text-medium text-black_color py-2 !border !border-black_color rounded-md w-full !outline-none placeholder:text-black_color"
              />
            </div>

            <div className="flex items-center gap-2 justify-between w-full">
              <label
                className="text-black_color w-1/4 capitalize text-lg font-medium "
                htmlFor="Team"
              >
                Team:
              </label>
              <input
                required
                value={formData.team}
                onChange={handleChangeInputs}
                name="team"
                placeholder="Avengers"
                id="Team"
                type="text"
                className="bg-input_bg px-4 text-medium text-black_color py-2 border border-black_color rounded-md w-full outline-none placeholder:text-black_color"
              />
            </div>

            <div className="flex items-center gap-2 justify-between w-full">
              <label
                className="text-black_color w-1/4 capitalize text-lg font-medium "
                htmlFor="Assignee"
              >
                Assignees:
              </label>
              <input
                required
                value={formData.assignee}
                onChange={handleChangeInputs}
                name="assignee"
                placeholder="@ Rakesh"
                id="Assignee"
                type="text"
                className="bg-input_bg px-4 text-medium text-black_color py-2 border border-black_color rounded-md w-full outline-none placeholder:text-black_color"
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 w-full">
                <label
                  className="text-black_color w-1/4 capitalize text-lg font-medium "
                  htmlFor="Priority"
                >
                  Priority:
                </label>
                <select
                  required
                  value={formData.priority}
                  onChange={handleChangeInputs}
                  name="priority"
                  id="Priority"
                  className="bg-input_bg px-4 text-medium text-black_color py-2 border border-black_color rounded-md w-full outline-none placeholder:text-black_color"
                >
                  <option value="">Select Priority</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
              </div>
            </div>
          </div>
        </DialogBody>

        <div className="flex justify-end w-full p-4">
          <div className="flex gap-4 items-center">
            <button
              type="submit"
              className="bg-btn_color capitalize px-4 py-1 text-white_color text-md font-medium rounded-[5px] bg-opacity-80 hover:bg-opacity-100"
            >
              Submit
            </button>
            <button
              onClick={handleResetForm}
              className="bg-btn_color capitalize px-4 py-1 text-white_color text-md font-medium rounded-[5px] bg-opacity-80 hover:bg-opacity-100"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </Dialog>
  );
}
