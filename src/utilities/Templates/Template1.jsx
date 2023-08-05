import React from "react";
import { connect } from "react-redux";

const Template1 = (props) => {
  console.log("store", props);
  const personalData = props.personal;
  console.log("tem per", props.personal);
  const getPersonalData = (key) => {
    if (personalData && personalData[key]) {
      return personalData[key];
    }
    return "";
  };
  return (
    <div className="space-y-3">
      This is template 1
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getPersonalData("title")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getPersonalData("first_name")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getPersonalData("email")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getPersonalData("name2")}
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
    // Assigning contactReducer state to 'contact' prop
    personal: state.personalReducer,
  };
};
export default connect(mapStateToProps)(Template1);
