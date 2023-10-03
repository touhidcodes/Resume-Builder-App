import React, { useState } from "react";
import { Icon } from "@iconify/react";

const AddMoreField = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div className="flex flex-row">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2  h-10 w-10 flex items-center justify-center py-3 ${
            selected
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-blue-600"
          } `}
        >
          {/* Number {index} */} 6
        </div>
        <div className="pl-3">
          <h4 className="text-3xl font-medium">Add More Field</h4>
        </div>
      </div>
      <form
        className={` flex-auto border-l-2 transition duration-500 ease-in-out w-full pl-5 ml-5 pt-5 pb-10  ${
          selected && "border-blue-600"
        }`}
      >
        <div className="text-center mt-5">
          <button>
            <div className="text-blue-600 font-medium flex flex-row items-center">
              <Icon icon="gala:add" className="h-6 w-6" />
              <h1 className="text-lg ml-2">Add More Field</h1>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMoreField;
