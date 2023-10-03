import React from "react";
import fieldINC from "../../utilities/INC/INC";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { setSkills, updateSkills } from "../../Redux/Actions/setSkills";

const SkillField = (props) => {
  const [skillsInput, setSkillsInput] = useState([{ skill: "", rating: "" }]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const addSkillField = () => {
    setSkillsInput([...skillsInput, { skill: "", rating: "" }]);
  };

  const onChange = (data, event) => {
    event.preventDefault();
    console.log(props.skills);
    //  Collect Data From onChange Event and pass through Redux Store
    if (props.skills !== null) {
      // Update
      props.updateSkills(data);
    } else {
      // Set
      props.setSkills(data);
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
          {/* Number {index} */} 5
        </div>
        <div className="pl-3">
          <h4 className="text-3xl font-medium">Your Skills</h4>
        </div>
      </div>
      <form
        onChange={handleSubmit(onChange)}
        className={` flex-auto border-l-2 transition duration-500 ease-in-out w-full pl-5 ml-5 pt-5 pb-10  ${
          selected && "border-blue-600"
        }`}
      >
        {skillsInput.map((skill, index) => {
          return (
            <div className="grid grid-cols-2 gap-5" key={index}>
              {/* Skills input */}
              <Controller
                name={`${fieldINC.skill}${index}`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div className="form-control">
                    <label className="label flex flex-row justify-start">
                      <span className="text-xl">Skills:</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Ex: React JS"
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
              {/* Skills Rating Input */}
              <Controller
                name={`${fieldINC.rating}${index}`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div className="form-control">
                    <label className="label flex flex-row justify-start">
                      <span className="text-xl">Ratings:</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Ex: 60"
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
          );
        })}
        <div className="text-center mt-5">
          <button onClick={addSkillField}>
            <div className="text-blue-600 font-medium flex flex-row items-center">
              <Icon icon="gala:add" className="h-6 w-6" />
              <h1 className="text-lg ml-2">Add More Field</h1>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

//  Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    skills: state.skillsReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setSkills: (skill) => dispatch(setSkills(skill)),
    updateSkills: (skill) => dispatch(updateSkills(skill)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillField);
