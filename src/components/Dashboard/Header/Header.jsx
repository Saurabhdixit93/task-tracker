import React from "react";

export default function Header({ title }) {
  return (
    <div className="flex justify-between items-center px-4 py-2 w-full">
      <h2 className="lg:text-4xl text-2xl font-bold text-black_color">
        {title}
      </h2>

      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="profile"
        className="lg:w-16 lg:h-16 w-10 h-10 rounded-full"
      />
    </div>
  );
}
