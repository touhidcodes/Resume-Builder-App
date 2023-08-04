import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { setContact, updateContact } from "../../Redux/Actions/setContact";
import fieldINC from "../../utilities/INC/INC";

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
        <div>
          <label className="label flex flex-row justify-start">
            <span className=" font-semibold">Job Title:</span>
          </label>
          <select
            {...register(`${fieldINC.jobTitle}`, { required: true })}
            className="pl-1 text-lg outline-none border-b-2"
            onChange={(e) => {
              handleInputChange(`"${fieldINC.jobTitle}"`, e);
            }}
          >
            <option defaultValue={"Select One"}>Select One</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {/* First Name Input */}
          <Controller
            name={fieldINC.firstName}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">First Name:</span>
                </label>
                <input
                  type="name"
                  placeholder="Ex: Adnan"
                  className=" pl-1 text-lg outline-none border-b-2"
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
          {/* Last Name Input */}
          <Controller
            name={fieldINC.lastName}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Last Name:</span>
                </label>
                <input
                  type="name"
                  placeholder="Ex: Angr"
                  className=" pl-1 text-lg outline-none border-b-2"
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
          {/* Country Input */}
          <Controller
            name={fieldINC.country}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Country:</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Bangladesh"
                  className=" pl-1 text-lg outline-none border-b-2"
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
          {/* City Input */}
          <Controller
            name={fieldINC.city}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">City:</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Jashore"
                  className=" pl-1 text-lg outline-none border-b-2"
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
          {/* Phone Number Input */}
          <Controller
            name={fieldINC.phone}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Phone Number:</span>
                </label>
                <input
                  type="number"
                  placeholder="Ex: +8801300000000"
                  className=" pl-1 text-lg outline-none border-b-2"
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
            name={fieldINC.email}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Email:</span>
                </label>
                <input
                  // TODO: Change input field type to email
                  type="name"
                  placeholder="Ex: name@domain.com"
                  className=" pl-1 text-lg outline-none border-b-2"
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
        </div>
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
