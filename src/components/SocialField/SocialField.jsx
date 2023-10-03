import React from "react";
import fieldINC from "../../utilities/INC/INC";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { setSocial, updateSocial } from "../../Redux/Actions/setSocial";

const SocialField = (props) => {
  const [socials, setSocials] = useState([{ social: "", link: "" }]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  // Load skills from props on initial render
  useEffect(() => {
    if (props.socials) {
      setSkills(Object.values(props.socials));
    }
  }, [props.socials]);

  // Set form values when skills change
  // useEffect(() => {
  //   socials.forEach((item, key) => {
  //     setValue(`socials[${key}].social`, item.social);
  //     setValue(`socials[${key}].link`, item.link);
  //   });
  // }, [setValue, socials]);

  // Add new skill field
  // const addNewClick = () => {
  //   const tempForm = [...socials];
  //   const tempEntry = { skill: "" };
  //   tempForm.push(tempEntry);
  //   setSkills(tempForm);
  // };
  const addSocialField = () => {
    setSocials([...socials, { social: "", link: "" }]);
  };

  // Delete skill field
  const deleteCard = (key) => {
    const tempForm = [...socials];
    tempForm.splice(key, 1);
    setSkills(tempForm);
  };

  const onChange = (data, event) => {
    event.preventDefault();
    console.log(props.social);
    //  Collect Data From onChange Event and pass through Redux Store
    if (props.social !== null) {
      // Update
      props.updateSocial(data);
    } else {
      // Set
      props.setSocial(data);
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
          {/* Number {index} */} 4
        </div>
        <div className="pl-3">
          <h4 className="text-3xl font-medium">Social Links</h4>
        </div>
      </div>
      <form
        onChange={handleSubmit(onChange)}
        className={` flex-auto border-l-2 transition duration-500 ease-in-out w-full pl-5 ml-5 pt-5 pb-10  ${
          selected && "border-blue-600"
        }`}
      >
        {socials.map((social, index) => {
          return (
            <div key={index}>
              <h5 className="mt-5 font-semibold">
                Social Links <span>{index + 1}</span>
              </h5>

              <div className="grid grid-cols-2 gap-5">
                {/* Skills input */}
                <Controller
                  name={`${fieldINC.social}${index}`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div className="form-control">
                      <label className="label flex flex-row justify-start">
                        <span className="text-xl">Social Handel:</span>
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
                  name={`${fieldINC.link}${index}`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div className="form-control">
                      <label className="label flex flex-row justify-start">
                        <span className="text-xl">Link:</span>
                      </label>
                      <input
                        type="name"
                        placeholder="Ex: https://www.linkedin.com/in/yourUsername/"
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
            </div>
          );
        })}
        <div className="text-center mt-5">
          <button onClick={addSocialField}>
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
    social: state.socialReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setSocial: (social) => dispatch(setSocial(social)),
    updateSocial: (social) => dispatch(updateSocial(social)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialField);
