import React from "react";

export function Label({children,  htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {children}
    </label>
  );
}
