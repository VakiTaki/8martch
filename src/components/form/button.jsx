import React from "react";

function Button({ label = "label", color }) {
  return (
    <div className="relative inline-flex  group">
      <div className="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-gradient-to-r to-[#ff4444] from-[#4dff00] rounded-xl blur-[4px] group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <button
        href="#"
        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        style={{ backgroundColor: color }}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
