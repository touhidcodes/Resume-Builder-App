import React from "react";
import { connect } from "react-redux";
import "../TemplateCSS/Template2.css";

const Template2 = (props) => {
  console.log("store", props.contact);
  const contactData = props.contact;

  const getContactData = (key) => {
    if (contactData && contactData[key]) {
      return contactData[key];
    }
    return "hi";
  };

  const experienceData = [];
  return (
    <div className="mx-auto">
      <div
        className="container w-full"
        style={{
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
          <p className="NAME">
            {/* {experienceData[maxKey].jobTitle} */}
            Web Dev
          </p>
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
            {/* {getcontactData(fieldCd.Objective)} */}
            Career obhective Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta delectus eveniet beatae quia. Nobis neque sapiente,
            officia temporibus officiis minus esse! Cupiditate consectetur
            laudantium totam quo odit minima consequatur facere?
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
          {Object.keys(experienceData).map((key) => (
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
          ))}

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
            {/* {geteducationData(fieldCd.Type)}: */}
            BSc:
          </h1>
          <p
            className="university"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            {/* {geteducationData(fieldCd.University)} */}
            BSMRSTU
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            {/* {geteducationData(fieldCd.Degree)}. */}
            BSc. in Biochemistry and Mol Bio.
          </p>
          <p
            className="duration"
            style={{ height: "auto", width: "90%", color: "black" }}
          >
            <span style={{ color: "blue" }}>
              {/* {geteducationData(fieldCd.Startyear)} */}
              2022
            </span>
            to
            <span style={{ color: "blue" }}>
              {/* {geteducationData(fieldCd.Endyear)} */}
              2023
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // Assigning contactReducer state to 'contact' prop
    contact: state.contactReducer,
  };
};
export default connect(mapStateToProps)(Template2);
