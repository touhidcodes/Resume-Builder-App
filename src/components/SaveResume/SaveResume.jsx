import React from "react";
import { connect } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

const SaveResume = (props) => {
  return <div></div>;
};

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    savedFile: state.saveResumeReducer,
  };
};
// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveResume);
