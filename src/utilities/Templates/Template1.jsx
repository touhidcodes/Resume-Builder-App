import React from "react";
import { store } from "../../Redux/Store/Store";
import { connect } from "react-redux";

const Template1 = (props) => {
  console.log("store", props.contact);
  const contactData = props.contact;

  const getContactData = (key) => {
    if (contactData && contactData[key]) {
      return contactData[key];
    }
    return "hi";
  };
  return (
    <div>
      This is template 1
      <div className="bg-blue-500 text-white">
        Your Name: {getContactData("name")}
      </div>
      <div className="bg-blue-500 text-white">
        Your Name: {getContactData("email")}
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
