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
    <div className="mx-auto">
      <div
        className="container"
        style={{
          height: "113vh",
          width: "100vh",
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
          <p className="NAME">
            {/* {experienceData[maxKey].jobTitle} */}
            {getPersonalData(fieldINC.firstName)} <span> </span>
            {getPersonalData(fieldINC.lastName)}
          </p>
          <p>{getPersonalData(fieldINC.jobTitle)}</p>
          <p>
            {getPersonalData(fieldINC.city)} <span> </span>
            {getPersonalData(fieldINC.country)}
          </p>
          <p> {getPersonalData(fieldINC.email)}</p>
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
            Career obhective Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
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
          <p>{getProfessionalData(fieldINC.jobTitle_1)}</p>
          <p>{getProfessionalData(fieldINC.company_1)}</p>
          <p>
            {getProfessionalData(fieldINC.startedDate_1)} to{" "}
            {getProfessionalData(fieldINC.endDate_1)}
          </p>
          <p>{getProfessionalData(fieldINC.location_1)}</p>
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
          ></h1>
          <p
            className="university"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            {getEducationalData(fieldINC.university)}
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            {getEducationalData(fieldINC.degree)}
          </p>
          <p
            className="duration"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            <span style={{ color: "blue" }}>
              {getEducationalData(fieldINC.startedYear)}
            </span>
            to
            <span style={{ color: "blue" }}>
              {getEducationalData(fieldINC.endYear)}
            </span>
            .
          </p>
          <p>{getEducationalData(fieldINC.eLocation)}</p>
        </div>
      </div>
    </div>
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
