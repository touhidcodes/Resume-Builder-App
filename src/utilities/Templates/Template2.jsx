import { Container } from "@mui/system";
import { Paper } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import "../TemplateCSS/Template2.css";
import fieldINC from "../INC/INC";

const Template2 = (props) => {
  console.log("store", props);
  const personalData = props.personal;
  const professionalData = props.professional;
  const educationalData = props.education;
  const socialData = props.social;
  const skillsData = props.skills;

  // Function to get personal data based on key
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
  const getEducationalData = (key) => {
    if (educationalData && educationalData[key]) {
      return educationalData[key];
    }
    return "";
  };

  // Function to get social data based on key
  const getSocialData = (key) => {
    if (socialData && socialData[key]) {
      return socialData[key];
    }
    return "";
  };

  // Function to get skills data based on key
  const getSkillsData = (key) => {
    if (skillsData && skillsData[key]) {
      return skillsData[key];
    }
    return "";
  };

  return (
    <>
      <div
        className=""
        style={{
          width: "93vh",
          height: "113vh",

          backgroundColor: "white",
        }}
      >
        {/* <div className="flex flex-row">
          <div className=" h-full w-1/2 bg-red-400">hi</div>
          <div className=" h-full w-1/2 bg-red-700">hello</div>{" "}
        </div> */}
        <div className="grid grid-cols-2">
          <div className=" bg-red-400">hi</div>
          <div className=" bg-red-700">hello</div>{" "}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // Assigning contactReducer state to 'contact' prop
    personal: state.personalReducer,
    professional: state.professionalReducer,
    education: state.educationalReducer,
    social: state.socialReducer,
    skills: state.skillsReducer,
  };
};
export default connect(mapStateToProps)(Template2);
