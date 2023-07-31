import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const Form = () => {
  const [changeData, setChangeData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setChangeData(data);
  };
  return (
    <div>
      <h4 className="text-4xl text-center">Name Of CV</h4>
      <form onChange={handleSubmit(onSubmit)}>
        <div>
          <label className="label flex flex-row justify-start">
            <span className=" font-semibold">Job Title:</span>
          </label>
          <select
            name="language"
            id="language"
            {...register("title", { required: true })}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label flex flex-row justify-start">
            <span className="text-gray-500 font-semibold">NAME:</span>
            <span className="text-red-500 font-bold ml-2">*</span>
          </label>
          <input
            type="name"
            placeholder="Your Name"
            name="name"
            className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
            required
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label flex flex-row justify-start">
            <span className="text-gray-500 font-semibold">E-MAIL ADDRESS:</span>
            <span className="text-red-500 font-bold ml-2">*</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
            required
            {...register("email", { required: true })}
          />
        </div>
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
    setcontact: (contact) => dispatch(setcontact(contact)),
    updatecontact: (contact) => dispatch(updatecontact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
