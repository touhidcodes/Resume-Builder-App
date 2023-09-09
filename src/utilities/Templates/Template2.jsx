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
        className="container"
        style={{
          width: "100vh",
          height: "113vh",
          border: "1px solid black",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            padding: "1% 1%",
            float: "left",
            width: "36%",
            height: "110vh",
            backgroundColor: "rgb(227, 227, 227)",
          }}
        >
          <h1
            style={{
              height: "4vh",
              width: "90%",
              color: "white",
              backgroundColor: "black",
              marginBottom: "10px",
              textAlign: "center",
              marginTop: "8vh",
            }}
          >
            PERSONAL INFO
          </h1>
          {/* Display contact information */}

          <p>Experience Data</p>

          <br />
          <hr />
          <br />

          <div
            style={{
              width: "100%",
              height: "4vh",
              color: "white",
              backgroundColor: "black",
              textAlign: "center",
              color: "white",
            }}
          >
            OBJECTIVE
          </div>

          {/* Display objective */}
          <p
            className="OBJECTIVE"
            style={{
              height: "auto",
              width: "90%",
              paddingTop: "5px",
              paddingBottom: "5px",
              color: "black",
            }}
          >
            Objective
          </p>

          <div
            style={{
              height: "4vh",
              width: "100%",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <h1 style={{ textAlign: "center", color: "white" }}>
              WORK EXPERIENCE
            </h1>
          </div>

          {/* Display work experience */}
          {/* {Object.keys(experienceData).map((key) => (
            <div key={key}>
              <h1 style={{ fontWeight: "bold", paddingTop: "5px" }}>
                {experienceData[key].jobTitle}
              </h1>
              <p>{experienceData[key].organizationName}</p>
              <p style={{ color: "blue", paddingBottom: "5px" }}>
                <span style={{ color: "black" }}>From</span>{" "}
                {experienceData[key].startYear}{" "}
                <span style={{ color: "black" }}>To</span>{" "}
                {experienceData[key].endYear}
              </p>
              <hr />
            </div>
          ))} */}

          <h1 style={{ paddingTop: "5px" }}></h1>
          <div
            style={{
              height: "4vh",
              width: "100%",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <h1 style={{ textAlign: "center", color: "white" }}>EDUCATION</h1>
          </div>
          {/* Display education details */}
          <h1
            className="type"
            style={{
              height: "auto",
              width: "90%",
              fontWeight: "bold",
              fontSize: "115%",
              paddingTop: "5px",
              color: "black",
            }}
          >
            Type
          </h1>
          <p
            className="university"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            University
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            Degree
          </p>
          <p
            className="duration"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            <span style={{ color: "blue" }}>S yr</span> to{" "}
            <span style={{ color: "blue" }}>E yr</span>.
          </p>
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
