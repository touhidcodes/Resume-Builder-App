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
          {/* Language  */}
          <div className="contact-info language px-5">
            <div className="title">Language</div>
            <ul>
              <li>
                <span className="text">Bangla</span>
                <span className="percent"></span>
              </li>
              <li>
                <span className="text">English</span>
                <span className="percent"></span>
              </li>
              <li>
                <span className="text">German</span>
                <span className="percent"></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 bg-blue-400 px-3 pt-2">
          {/* Experience  */}
          <div className="">
            <h2 className="font-bold">Profile</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              tenetur eos doloribus fuga delectus? Aut porro itaque omnis minima
              dolorum possimus incidunt dolor, nostrum illum eaque et laboriosam
              saepe culpa optio quidem
            </p>
          </div>
          <div className="">
            <h2 className="font-bold">Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2019 - present</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Senior UX Designer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>2016 - 2018</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>UI/UX Designer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>2014 - 2016</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Junior UX Designer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </p>
              </div>
            </div>
          </div>
          {/* Professional Skills  */}
          <div className="about skills">
            <h2 className="font-bold">Professional Skills</h2>
            <div className="box">
              <h4>HTML</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>JavaScript</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>Photoshop</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>Illustrator</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>Adobe XD</h4>
              <div className="percent"></div>
            </div>
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
