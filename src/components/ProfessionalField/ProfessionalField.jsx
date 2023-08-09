import React, { useState } from "react";
import fieldINC from "../../utilities/INC/INC";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import {
  setProfessional,
  updateProfessional,
} from "../../Redux/Actions/setProfessional";

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

    // console.log("professional", props.professional);
    //  Collect Data From onChange Event and pass through Redux Store
    if (props.professional !== null) {
      // Update
      props.updateProfessional(data);
    } else {
      // Set
      props.setProfessional(data);
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
            name={fieldINC.jobTitle_1}
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
                  className="pl-2 py-1 text-lg outline-none bg-base-300 rounded-sm"
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
            name={fieldINC.company_1}
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
                  className="pl-2 py-1 text-lg outline-none bg-base-300 rounded-sm"
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
            name={fieldINC.startedDate_1}
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
                  className="pl-2 py-1 text-lg outline-none bg-base-300 rounded-sm"
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
            name={fieldINC.endDate_1}
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
                  className="pl-2 py-1 text-lg outline-none bg-base-300 rounded-sm"
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
            name={fieldINC.location_1}
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
                  className="pl-2 py-1 text-lg outline-none bg-base-300 rounded-sm"
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
    professional: state.professionalReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setProfessional: (professional) => dispatch(setProfessional(professional)),
    updateProfessional: (professional) =>
      dispatch(updateProfessional(professional)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalField);
