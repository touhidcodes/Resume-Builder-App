import React from "react";
import { connect } from "react-redux";
import fieldINC from "../INC/INC";

const Template1 = (props) => {
  const personalData = props.personal;
  const professionalData = props.professional;
  const educationData = props.education;
  console.log("props", props);

  console.log("personal", props.personal);
  console.log("professional", props.professional);
  console.log("education", props.education);

  const getPersonalData = (key) => {
    if (personalData && personalData[key]) {
      return personalData[key];
    }
    return "";
  };

  // Function to get education data based on key
  const getProfessionalData = (key) => {
    if (professionalData && professionalData[key]) {
      return professionalData[key];
    }
    return "";
  };

  // Function to get education data based on key
  const getEducationData = (key) => {
    if (educationData && educationData[key]) {
      return educationData[key];
    }
    return "";
  };

  return (
    <div className="space-y-3">
      This is template 1
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getPersonalData(fieldINC.jobTitle)}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getProfessionalData(fieldINC.jobTitle_1)}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getEducationData(fieldINC.startedYear)}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getPersonalData(fieldINC.lastName)}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getPersonalData("name3")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getPersonalData("name4")}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // Assigning Reducer state to 'contact' prop
    personal: state.personalReducer,
    professional: state.professionalReducer,
    education: state.educationalReducer,
  };
};
export default connect(mapStateToProps)(Template1);
