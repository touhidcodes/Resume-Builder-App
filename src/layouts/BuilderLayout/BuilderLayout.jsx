import React from "react";
import Form from "../../pages/Form/Form";
import { Outlet } from "react-router-dom";

const BuilderLayout = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Form />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default BuilderLayout;
