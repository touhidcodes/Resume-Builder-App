import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import ResumeForm from "../ResumeForm/ResumeForm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import SaveMyResume from "../../components/SaveMyResume/SaveMyResume";

const ResumeBuilder = (props) => {
  const downloadResume = async () => {
    const input = document.getElementById("download-resume");
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save(`MyResume.pdf`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const resume = useParams();
  // console.log(id.id);
  const [allData, setAllData] = useState(data);
  // console.log(props);
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <ResumeForm />
      </div>
      <div>
        {/* <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
            onClick={downloadResume}
          >
            Download
          </button>
          <button className="bg-red-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded ml-10">
            Preview
          </button>
        </div> */}

        <div className="p-10 bg-base-200 min-h-screen">
          <div className="download-resume">
            {allData.map((item) => (item.id == resume.id ? item.data : ""))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
