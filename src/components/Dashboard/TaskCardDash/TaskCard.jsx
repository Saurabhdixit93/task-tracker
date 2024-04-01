import React from "react";

export default function TaskCard({ taskType, children }) {
  const bgColor =
    taskType === "Pending"
      ? "bg-card_head_pending"
      : taskType === "In Progress"
      ? "bg-card_head_progress"
      : taskType === "Completed"
      ? "bg-card_head_completed"
      : taskType === "Deployed"
      ? "bg-card_head_deployed"
      : "bg-card_head_differed";

  return (
    <div className=" max-w-[350px] w-full  border-1 flex flex-col gap-6 border-black_color bg-white_color rounded-lg ">
      <div
        className={`rounded-t-lg flex items-center justify-center ${bgColor} p-4 w-full`}
      >
        <p className="text-xl font-bold text-white_color">{taskType}</p>
      </div>

      <div className="hidden-scroll overflow-y-auto max-w-[350px] w-full h-[500px] ">
        <div className="flex flex-col gap-4 w-full">{children}</div>
      </div>
    </div>
  );
}
