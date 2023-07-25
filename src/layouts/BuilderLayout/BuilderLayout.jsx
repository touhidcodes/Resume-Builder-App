import React, { useState } from "react";
import Form from "../../pages/Form/Form";
import { Outlet, useParams } from "react-router-dom";
import data from "../../data/data";
import Template1 from "../../utilities/Templates/Template1";

const BuilderLayout = () => {
  const log = useParams();
  // console.log(id.id);
  const [allData, setAllData] = useState(data);
  console.log(allData);
  // const d = allData.find((item) => item.id == log.id);
  // console.log(d);

  return (
    <div className="grid grid-cols-2">
      <div>
        <Form />
      </div>
      <div>
        <Outlet />
        {allData.map((item) => (item.id == log.id ? item.data : ""))}
      </div>
    </div>
  );
};

export default BuilderLayout;
