import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { setContact, updateContact } from "../../Redux/Actions/setContact";

const Form = (props) => {
  const [changeData, setChangeData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    setChangeData(data);

    if (props.contact !== null) {
      // Update
      props.updateContact(data);
    } else {
      // Set
      props.setContact(data);
    }
  };

  const onChange = (changeData) => {
    const data = {};
  };

  // return handleInputChange;

  const data = {};

  const handleInputChange = (field, event) => {
    console.log(field, event.target.value);
    data[field] = event.target.value;
    console.log(data);
  };
  const createDataCollector = () => {
    // const collectData = (fieldName, value) => {
    //   data[fieldName] = value;
    //   console.log(data);
    // };
    if (props.contact !== null) {
      // Update
      props.updateContact(data);
    } else {
      // Set
      props.setContact(data);
    }
    console.log(data);
  };
  // Example usage:
  // const onChangeFunction = createDataCollector();

  // onChangeFunction("title", "javascript"); // { title: 'javascript' }
  // onChangeFunction("name", "g"); // { title: 'javascript', name: 'g' }
  // onChangeFunction("email", "h"); // { title: 'javascript', name: 'g', email: 'h' }
  // onChangeFunction("name2", "g"); // { title: 'javascript', name: 'g', email: 'h', name2: 'g' }

  return (
    <div>
      <h4 className="text-4xl text-center">Name Of CV</h4>
      <form onSubmit={handleSubmit(onSubmit)} onChange={createDataCollector}>
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
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <label className="label flex flex-row justify-start">
                <span className="text-gray-500 font-semibold">NAMEEs:</span>
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange("name", e);
                }}
              />
            </>
          )}
        />
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
            // onChange={handleInputChange("name", e)}
          />
        </div>
        <div className="form-control">
          <label className="label flex flex-row justify-start">
            <span className="text-gray-500 font-semibold">E-MAIL ADDRESS:</span>
            <span className="text-red-500 font-bold ml-2">*</span>
          </label>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
            // required
            {...register("email", { required: true })}
          />
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
            {...register("name2", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label flex flex-row justify-start">
            <span className="text-gray-500 font-semibold">E-MAIL ADDRESS:</span>
            <span className="text-red-500 font-bold ml-2">*</span>
          </label>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
            // required
            {...register("email2", { required: true })}
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
