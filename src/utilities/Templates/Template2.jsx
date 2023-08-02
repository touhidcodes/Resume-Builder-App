import React from "react";
import { connect } from "react-redux";

const Template2 = (props) => {
  console.log("store", props.contact);
  const contactData = props.contact;

  const getContactData = (key) => {
    if (contactData && contactData[key]) {
      return contactData[key];
    }
    return "hi";
  };
  return (
    <div className="space-y-3">
      This is template 2
      <div className="bg-blue-500 text-white p-3">
        Your Name: {getContactData("name")}
      </div>
      <div className="bg-blue-500 text-white p-3">
        Your email: {getContactData("email")}
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
