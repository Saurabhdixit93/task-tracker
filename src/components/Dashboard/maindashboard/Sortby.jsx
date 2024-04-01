import { Option, Select } from "@material-tailwind/react";
import React from "react";

const priorityOptions = ["P0", "P1", "P2"];

export default function Sortby() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
      <p className="text-lg font-medium text-black_color capitalize whitespace-nowrap mr-2">
        Sort by:
      </p>

      <div className="w-40 max-w-40 lg:max-w-72 lg:w-72">
        <Select label="Priority" className="bg-white_color text-black_color">
          {priorityOptions?.map((option, index) => (
            <Option className="mb-1" value={option} key={index}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
}
