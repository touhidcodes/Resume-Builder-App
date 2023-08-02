import React from "react";
import { connect } from "react-redux";

const Template1 = (props) => {
  console.log("store", props.contact);
  const contactData = props.contact;

  const getContactData = (key) => {
    if (contactData && contactData[key]) {
      return contactData[key];
    }
    return "";
  };
  return (
    <div className="space-y-3">
      This is template 1
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getContactData("title")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getContactData("name")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getContactData("email")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getContactData("name2")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getContactData("name3")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getContactData("name4")}
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
export default connect(mapStateToProps)(Template1);
