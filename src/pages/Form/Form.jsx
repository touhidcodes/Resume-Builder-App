import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { setContact, updateContact } from "../../Redux/Actions/setContact";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  let data = {};

  //  Add Data into Object
  const addToObject = (key, value) => {
    const preObj = { ...data };
    preObj[key] = value;
  };

  //  onChange Handler to Get Input from Text Field
  const handleInputChange = (field, event) => {
    addToObject(field, event.target.value);
  };

  //  onSubmit Event of Form Submit
  const onChange = (data, event) => {
    event.preventDefault();
    // console.log(data);

    //  Collect Data From onChange Event and pass through Redux Store
    if (props.contact !== null) {
      // Update
      props.updateContact(data);
    } else {
      // Set
      props.setContact(data);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-5">
      <h4 className="text-4xl text-center">Name Of CV</h4>
      <form onChange={handleSubmit(onChange)} onSubmit={handleSubmit(onSubmit)}>
        {/* Job Title Input */}
        <div
          onChange={(e) => {
            handleInputChange("title", e);
          }}
        >
          <label className="label flex flex-row justify-start">
            <span className=" font-semibold">Job Title:</span>
          </label>
          <select name="title" {...register("title", { required: true })}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
          </select>
        </div>
        {/* Name Input */}
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="form-control">
              <label className="label flex flex-row justify-start">
                <span className="text-gray-500 font-semibold">NAME:</span>
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                required
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange(`"${field.name}"`, e);
                }}
              />
            </div>
          )}
        />
        {/* Email Input */}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="form-control">
              <label className="label flex flex-row justify-start">
                <span className="text-gray-500 font-semibold">NAME:</span>
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Name"
                className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                required
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange(`"${field.name}"`, e);
                }}
              />
            </div>
          )}
        />
        {/* Name Input */}
        <Controller
          name="name2"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="form-control">
              <label className="label flex flex-row justify-start">
                <span className="text-gray-500 font-semibold">NAME:</span>
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                required
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange(`"${field.name}"`, e);
                }}
              />
            </div>
          )}
        />
        {/* Name Input */}
        <Controller
          name="name3"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="form-control">
              <label className="label flex flex-row justify-start">
                <span className="text-gray-500 font-semibold">NAME:</span>
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                required
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange(`"${field.name}"`, e);
                }}
              />
            </div>
          )}
        />
        {/* Name Input */}
        <Controller
          name="name4"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="form-control">
              <label className="label flex flex-row justify-start">
                <span className="text-gray-500 font-semibold">NAME:</span>
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                required
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange(`"${field.name}"`, e);
                }}
              />
            </div>
          )}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setContact: (contact) => dispatch(setContact(contact)),
    updateContact: (contact) => dispatch(updateContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
