import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import ResumeForm from "../ResumeForm/ResumeForm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import SaveMyResume from "../../components/SaveMyResume/SaveMyResume";

const ResumeBuilder = () => {
  const downloadResume = async () => {
    const input = document.getElementById("download");
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
  //  console.log(allData);
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <ResumeForm downloadResume />
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
