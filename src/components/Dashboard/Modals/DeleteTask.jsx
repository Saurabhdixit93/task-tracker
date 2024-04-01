import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { XIcon } from "lucide-react";
import React from "react";

export default function DeleteTask({
  onModalHandle,
  isDelete,
  onDelete,
  TaskTitle,
}) {
  const handleDeleteSubmit = () => {
    onDelete();
  };
  return (
    <Dialog
      size="sm"
      open={isDelete}
      handler={onModalHandle}
      className="rounded-none bg-white_color"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <DialogHeader className="uppercase text-2xl font-bold text-black_color">
          Delete Task
        </DialogHeader>

        <button
          onClick={onModalHandle}
          className="cursor-pointer rounded-full p-1 border-2 border-black_color w-8 h-8 flex items-center justify-center"
        >
          <XIcon className="text-black_color w-6 h-6" />
        </button>
      </div>

      <DialogBody className="bg-gradient-to-r from-primary_color to-secondary_color p-4">
        <div className="w-full justify-start flex">
          <p className="text-lg font-medium text-black_color ">
            Do You Wish To delete Task
          </p>
        </div>
      </DialogBody>

      <div className="flex justify-between w-full p-4">
        <p className="font-bold text-black_color text-lg">{TaskTitle}</p>

        <div className="flex gap-4 items-center">
          <button
            className="bg-btn_color capitalize px-4 py-1 text-white_color text-md font-medium rounded-[5px] bg-opacity-80 hover:bg-opacity-100"
            onClick={handleDeleteSubmit}
          >
            Yes
          </button>
          <button
            className="bg-btn_color capitalize px-4 py-1 text-white_color text-md font-medium rounded-[5px] bg-opacity-80 hover:bg-opacity-100"
            onClick={onModalHandle}
          >
            No
          </button>
        </div>
      </div>
    </Dialog>
  );
}
