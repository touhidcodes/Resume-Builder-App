import React, { useState } from "react";
import fieldINC from "../../utilities/INC/INC";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { setPersonal, updatePersonal } from "../../Redux/Actions/setPersonal";

const ProfessionalField = (props) => {
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

    // if (!key in data) {
    //   console.log("key");
    // }
  };
  // console.log(data);

  const onChange = (data, event) => {
    event.preventDefault();
    // console.log(data);

    console.log("personal", props.personal);
    //  Collect Data From onChange Event and pass through Redux Store
    if (props.personal !== null) {
      // Update
      props.updatePersonal(data);
    } else {
      // Set
      props.setPersonal(data);
    }
  };
  console.log(props);
  // onChange Handler to Get Input from Text Field
  const handleInputChange = (field, event) => {
    addToObject(field, event.target.value);
    console.log("input", field, event.target.value);
  };
  return (
    <div>
      <form onChange={handleSubmit(onChange)}>
        <div className="grid grid-cols-2 gap-5">
          {/* Job Title Input */}
          <Controller
            name={fieldINC.firstName}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Job Title:</span>
                </label>
                <input
                  type="name"
                  placeholder="Ex: Web Developer"
                  className="pl-2 py-1 text-lg outline-none bg-base-300"
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
          {/* Company Input */}
          <Controller
            name={fieldINC.lastName}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Company:</span>
                </label>
                <input
                  type="name"
                  placeholder="Ex: Employee Pro"
                  className="pl-2 py-1 text-lg outline-none bg-base-300"
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
          {/* Started Date Input */}
          <Controller
            name={fieldINC.country}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Started Date:</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: JAN 2023"
                  className="pl-2 py-1 text-lg outline-none bg-base-300"
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
          {/* End Date Input */}
          <Controller
            name={fieldINC.city}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">End Date:</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: DEC 2023"
                  className="pl-2 py-1 text-lg outline-none bg-base-300"
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
          {/* Location Input */}
          <Controller
            name={fieldINC.email}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Location:</span>
                </label>
                <input
                  type="name"
                  placeholder="Ex: Dhaka, Bangladesh"
                  className="pl-2 py-1 text-lg outline-none bg-base-300"
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
        {/* <input type="submit" value="submit" /> */}
      </form>
    </div>
  );
};

//  Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    personal: state.personalReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setPersonal: (professional) => dispatch(setPersonal(professional)),
    updatePersonal: (professional) => dispatch(updatePersonal(professional)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalField);
