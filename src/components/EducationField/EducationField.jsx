import React, { useState } from "react";
import fieldINC from "../../utilities/INC/INC";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import {
  setEducation,
  updateEducation,
} from "../../Redux/Actions/setEducation";

const EducationField = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const onChange = (data, event) => {
    event.preventDefault();

    //  Collect Data From onChange Event and pass through Redux Store
    if (props.education !== null) {
      // Update
      props.updateEducation(data);
    } else {
      // Set
      props.setEducation(data);
    }
    console.log(data);
  };

  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div className="flex flex-row">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2  h-10 w-10 flex items-center justify-center py-3 ${
            selected
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-blue-600"
          } `}
        >
          {/* Number {index} */} 3
        </div>
        <div className="pl-3">
          <h4 className="text-3xl font-medium">Educational Details</h4>
        </div>
      </div>
      <form
        onChange={handleSubmit(onChange)}
        className={` flex-auto border-l-2 transition duration-500 ease-in-out w-full pl-5 ml-5 pt-5 pb-10  ${
          selected && "border-blue-600"
        }`}
      >
        <div className="grid grid-cols-2 gap-5">
          {/* College/University Input */}
          <Controller
            name={fieldINC.university}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">College/University:</span>
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
                  }}
                />
              </div>
            )}
          />
          {/* Degree Input */}
          <Controller
            name={fieldINC.degree}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Degree:</span>
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
                  }}
                />
              </div>
            )}
          />
          {/* Started Date Input */}
          <Controller
            name={fieldINC.startedYear}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Started Year:</span>
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
                  }}
                />
              </div>
            )}
          />
          {/* End Date Input */}
          <Controller
            name={fieldINC.endYear}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">End Year:</span>
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
                  }}
                />
              </div>
            )}
          />
          {/* Location Input */}
          <Controller
            name={fieldINC.eLocation}
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
                  }}
                />
              </div>
            )}
          />
        </div>
      </form>
    </div>
  );
};

//  Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    education: state.educationalReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setEducation: (education) => dispatch(setEducation(education)),
    updateEducation: (education) => dispatch(updateEducation(education)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationField);
