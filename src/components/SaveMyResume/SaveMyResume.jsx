import React from "react";
import { connect } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { saveResume } from "../../Redux/Actions/saveResume";

const SaveMyResume = (props) => {
  console.log(props);
  const [resume, setResume] = useState(props.previewData);
  // Receiving props from Reducer
  const savedResume = props.resume;

  // Function to download the resume as PDF
  const downloadResume = async () => {
    const input = document.getElementById("download");
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save(`MyResume.pdf`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      ------------------------------- --------------------------------
      <div className="flex py-8 px-8 justify-center items-center relative">
        <div id="download">
          {savedResume !== null ? (
            <div>
              {/* {savedResume.data} */}
              {/* {savedResume} */}
              Data Consist
            </div>
          ) : (
            <p className="text-red-400">No Data</p>
            // TODO: Implement if there no data shows !!!
            // <img style={{ width: "15vw", marginTop: "10vw" }} src={nodata} />
          )}
        </div>
        {props.savedFile ? (
          <button
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
            }}
            onClick={downloadResume} //Download the Document
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    previewData: state.templateReducer,
    resume: state.templateReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    saveResume: (resume) => dispatch(saveResume(resume)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SaveMyResume);
