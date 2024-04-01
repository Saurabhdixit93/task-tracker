import { Input, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const priorityOptions = ["P0", "P1", "P2"];
export default function FilterHeader() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col items-start lg:flex-row lg:items-center gap-2">
      <p className="text-lg font-medium text-black_color capitalize whitespace-nowrap mr-2">
        filter by:
      </p>

      <input
        className="w-40 max-w-40 lg:max-w-72 lg:w-72 px-2 py-2 rounded-md bg-white_color text-black_color border-0 focus:ring-0 outline-0 text-black_color placeholder:text-black_color"
        name="assignee_name"
        placeholder="Assignee Name"
      />
      <div className="w-40 max-w-40 lg:max-w-72 lg:w-72">
        <Select label="Priority" className="bg-white_color text-black_color">
          {priorityOptions?.map((option, index) => (
            <Option className="mb-1" value={option} key={index}>
              {option}
            </Option>
          ))}
        </Select>
      </div>

      <div className="flex gap-2 items-center bg-white_color text-black_color p-2 rounded-md border border-gray-300">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="DD/MM/YYYY"
          className="w-20 bg-transparent text-black_color focus:ring-0 outline-none focus:outline-none active:outline-none"
        />
        <p className="text-black_color font-medium whitespace-nowrap text-xs">
          to
        </p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="DD/MM/YYYY"
          className="w-20 bg-transparent text-black_color focus:ring-0 outline-none focus:outline-none active:outline-none"
        />
      </div>
    </div>
  );
}
