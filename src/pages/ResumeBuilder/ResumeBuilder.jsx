import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import Form from "../ResumeForm/ResumeForm";

const ResumeBuilder = () => {
  const resume = useParams();
  // console.log(id.id);
  const [allData, setAllData] = useState(data);
  //  console.log(allData);
  return (
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
  );
};

export default ResumeBuilder;
