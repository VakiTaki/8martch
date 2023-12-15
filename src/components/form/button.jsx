import React from "react";

function Button({ label = "label", color, onClick, text, children }) {
  return (
    <div className="relative inline-flex  group" onClick={onClick}>
      <div className="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-white rounded-xl blur-[4px] group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <button
        href="#"
        className={
          "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold  transition-all duration-200 bg-green-900 rounded-xl focus:outline-none " +
          text
        }
        style={{ backgroundColor: color }}
      >
        {children ? children : label}
      </button>
    </div>
  );
}

export default Button;
