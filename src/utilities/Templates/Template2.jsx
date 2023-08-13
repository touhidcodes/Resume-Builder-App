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
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    // Assigning contactReducer state to 'contact' prop
    contact: state.contactReducer,
  };
};
export default connect(mapStateToProps)(Template2);
