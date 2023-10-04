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
    <div
      className=""
      style={{
        width: "93vh",
        // height: "113vh",
        height: "155vh",

        backgroundColor: "white",
      }}
    >
      <div className="flex flex-row">
        <div className="w-1/2 bg-zinc-500">
          <div className="flex justify-center mt-10 mb-5">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="h-40 w-40 rounded-full"
            />
          </div>
          <div className="text-center text-white">
            <h2 className="font-bold text-xl">
              {`${getPersonalData(fieldINC.firstName)}` || "Your"}{" "}
              {`${getPersonalData(fieldINC.lastName)}` || "Name"}
              <br />
            </h2>
            <h4> {`${getPersonalData(fieldINC.jobTitle)}` || "Job Title"}</h4>
          </div>
          {/* contact */}
          <div className="text-white mt-10 px-5">
            <div className="font-bold uppercase">Contact Info</div>
            <div className=" mt-1">
              <ul>
                <li>
                  {`${getPersonalData(fieldINC.phone)}` || " +8801234567890"}
                </li>
                <li>
                  {`${getPersonalData(fieldINC.email)}` ||
                    "youremail@domain.com"}
                </li>
                <li>
                  {`${getPersonalData(fieldINC.city)}` || "City"}
                  {", "}
                  {`${getPersonalData(fieldINC.country)}` || "Country"}
                </li>
              </ul>
            </div>
          </div>
          {/* Education */}
          <div className="text-white mt-5 px-5">
            <div className="font-bold uppercase">Education</div>
            <ul className="mt-1">
              <li>
                <h5>
                  {`${getEducationalData(fieldINC.startedYear)}` || "JAN 2000"}
                  {" - "}
                  {`${getEducationalData(fieldINC.endYear)}` || "DEC 2002"}
                </h5>
                <h4>
                  {`${getEducationalData(fieldINC.degree)}` || "Your Degree"}
                </h4>
                <h4>
                  {`${getEducationalData(fieldINC.university)}` ||
                    "Your University"}
                </h4>
                <h4>
                  {`${getEducationalData(fieldINC.eLocation)}` || "Location"}
                </h4>
              </li>
            </ul>
          </div>
          {/* Social Links  */}
          <div className="px-5 mt-5 text-white">
            <div className="font-bold uppercase">Social Links</div>
            <ul>
              <li>
                <span className="">
                  {" "}
                  {socialData ? socialData.SOCIAL0 : "Social"}
                </span>
                {": "}
                <span className="">
                  {socialData ? socialData.LINK0 : "LInk"}
                </span>
              </li>
              <li>
                <span className="">
                  {" "}
                  {socialData ? socialData.SOCIAL1 : "Social"}
                </span>
                {": "}
                <span className="">
                  {socialData ? socialData.LINK1 : "LInk"}
                </span>
              </li>
              <li>
                <span className="">
                  {socialData ? socialData.SOCIAL2 : "Social"}
                </span>
                {": "}
                <span className="">
                  {socialData ? socialData.LINK2 : "LInk"}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 bg-blue-400 px-5 pt-5">
          {/* Experience  */}
          <div className="">
            <h2 className="uppercase font-bold">Career Objectives</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              tenetur eos doloribus fuga delectus? Aut porro itaque omnis minima
              dolorum possimus incidunt dolor, nostrum illum eaque et laboriosam
              saepe culpa optio quidem
            </p>
          </div>
          <div>
            <h2 className="font-bold uppercase mt-5">Experience</h2>
            <div>
              <h5>
                {`${getProfessionalData(fieldINC.startedDate_1)}` || "JAN 2000"}
                {" - "}
                {`${getProfessionalData(fieldINC.endDate_1)}` || "DEC 2002"}
              </h5>
              <h5>
                {`${getProfessionalData(fieldINC.company_1)}` || "Your Company"}
              </h5>
              <h4>
                {`${getProfessionalData(fieldINC.jobTitle_1)}` ||
                  "Job Title in your Company"}
              </h4>
              <h4>
                {`${getProfessionalData(fieldINC.location_1)}` || "Location"}
              </h4>
            </div>
          </div>
          {/* Professional Skills  */}
          <div className="mt-5">
            <h2 className="font-bold uppercase">Professional Skills</h2>
            <h4>
              {skillsData ? socialData.SKILL0 : "Skill"}:{" "}
              {skillsData ? socialData.RATING1 : "Ratings"}
            </h4>
          </div>
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
