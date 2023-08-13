import React from "react";
import fieldINC from "../../utilities/INC/INC";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { useState } from "react";
import { Icon } from "@iconify/react";

const SocialField = (props) => {
  const [socialInput, setSocialInput] = useState([{ skill: "", rating: "" }]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const addSocialField = () => {
    setSocialInput([...socialInput, { skill: "", rating: "" }]);
  };

  const onChange = (data, event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onChange={handleSubmit(onChange)}>
        {socialInput.map((social, index) => {
          return (
            <div className="grid grid-cols-2 gap-5">
              {/* Skills input */}
              <Controller
                name={`skill${index}`}
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
                name={`rating${index}`}
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
          );
        })}
        <div className="text-center mt-5">
          <button onClick={addSocialField}>
            <div className="text-blue-600 font-semibold flex flex-row items-center">
              <Icon icon="gala:add" className="h-6 w-6" />
              <h1 className="text-lg ml-2">Add More Field</h1>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialField;
