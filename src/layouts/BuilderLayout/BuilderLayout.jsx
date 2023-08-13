import React, { useState } from "react";
import Form from "../../pages/Form/Form";
import { Outlet, useParams } from "react-router-dom";
import data from "../../data/data";
import Template1 from "../../utilities/Templates/Template1";

const BuilderLayout = () => {
  const resume = useParams();
  // console.log(id.id);
  const [allData, setAllData] = useState(data);
  console.log(allData);
  // const d = allData.find((item) => item.id == log.id);
  // console.log(d);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Form />
        </div>
        <div>
          <div className="p-10 bg-base-200 min-h-screen">
            {allData.map((item) => (item.id == resume.id ? item.data : ""))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderLayout;
