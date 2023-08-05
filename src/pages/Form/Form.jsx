import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { setContact, updateContact } from "../../Redux/Actions/setContact";
import fieldINC from "../../utilities/INC/INC";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PersonalField from "../../components/PersonalField/PersonalField";

const Form = () => {
  // const [value, setValues] = useState();
  // // console.log(value);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setValue,
  //   control,
  // } = useForm();

  // let data = {};

  // //  Add Data into Object
  // const addToObject = (key, value) => {
  //   const preObj = { ...data };

  //   if (!key in data) {
  //     console.log("key");
  //   }
  // };
  // console.log(data);

  // //  onChange Handler to Get Input from Text Field
  // const handleInputChange = (field, event) => {
  //   addToObject(field, event.target.value);
  //   console.log("input", field, event.target.value);
  // };

  // //  onSubmit Event of Form Submit
  // const onChange = (data, event) => {
  //   event.preventDefault();
  //   // console.log(data);

  //   //  Collect Data From onChange Event and pass through Redux Store
  //   if (props.contact !== null) {
  //     // Update
  //     props.updateContact(data);
  //   } else {
  //     // Set
  //     props.setContact(data);
  //   }
  // };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="space-y-5">
      <h4 className="text-4xl text-center">Name Of CV</h4>
      <PersonalField />
    </div>
  );
};

export default Form;
