import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full max-w min-h-screen bg-gradient-to-r from-primary_color to-secondary_color ">
      {children}
    </div>
  );
}
