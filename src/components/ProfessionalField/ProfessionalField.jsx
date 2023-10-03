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

  const onChange = (data, event) => {
    event.preventDefault();
    // console.log(data);

    //  Collect Data From onChange Event and pass through Redux Store
    if (props.professional !== null) {
      // Update
      props.updateProfessional(data);
      // console.log("data_updated");
      // console.log("data_updated", props);
    } else {
      // Set
      props.setProfessional(data);
    }
  };

  const [selected, setSelected] = useState(false);
  return (
    <div>
      {/* 2nd step of input field */}
      <div className="flex flex-row">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2  h-10 w-10 flex items-center justify-center py-3 ${
            selected
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-blue-600"
          } `}
        >
          {/* Number {index} */} 2
        </div>
        <div className="pl-3">
          <h4 className="text-3xl font-medium">Professional Summery</h4>
        </div>
      </div>
      <form
        onChange={handleSubmit(onChange)}
        className={` flex-auto border-l-2 transition duration-500 ease-in-out w-full pl-5 ml-5 pt-5 pb-10  ${
          selected && "border-blue-600"
        }`}
      >
        <div className="grid grid-cols-2 gap-5">
          {/* Job Title Input */}
          <Controller
            name={fieldINC.jobTitle_1}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Job Title at Company:</span>
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
          {/* Company Input */}
          <Controller
            name={fieldINC.company_1}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Company Name:</span>
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
