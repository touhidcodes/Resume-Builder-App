import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { saveResume } from "../../Redux/Actions/saveResume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumePreview = (props) => {
  const [resume, setResume] = useState(props.resume);
  console.log(props);
  console.log(props.resume);

  const downloadResume = async () => {
    const input = document.getElementById("download");
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        const pdf = new jsPDF("p", "mm", "a4");
        // var width = pdf.internal.pageSize.getWidth();
        // var height = pdf.internal.pageSize.getHeight();
        var width = 208;
        var height = (canvas.height * width) / canvas.width;
        // console.log(height);
        pdf.addImage(canvas, "JPEG", 0, 0, width, height);
        pdf.save(`MyResume.pdf`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-2">
      <div>
        <div id="download">{resume}</div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={downloadResume}
        >
          Download
        </button>
        <button className="bg-red-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded ml-10">
          Preview
        </button>
      </div>
    </div>
  );
};

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    resume: state.templateReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    saveResume: (resume) => dispatch(saveResume(resume)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResumePreview);
