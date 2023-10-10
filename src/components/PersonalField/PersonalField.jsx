import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import fieldINC from "../../utilities/INC/INC";
import { setPersonal, updatePersonal } from "../../Redux/Actions/setPersonal";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Avatar from "react-avatar-edit";
import avatar_img from "../../assets/avatar.jpg";

const PersonalField = (props) => {
  const [value, setValues] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const onChange = (data, event) => {
    event.preventDefault();
    console.log(data);

    //  Collect Data From onChange Event and pass through Redux Store
    if (props.personal !== null) {
      // Update
      props.updatePersonal(data);
    } else {
      // Set
      props.setPersonal(data);
    }
  };

  const titles = [
    "Select",
    "Web Developer",
    "Graphic Designer",
    "Sales officer",
    "Marketing Manager",
    "SEO Analyst",
    "Data Analyst",
  ];

  const [selected, setSelected] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const onClose = () => {
    setImage({ preview: null });
  };

  const onCrop = (preview) => {
    setImage({ preview });
    setPreviewImage(preview);
  };
  return (
    <div>
      <div>
        <img
          src={previewImage ? previewImage : avatar_img}
          alt=""
          className="h-32 w-32 rounded-full"
        />
      </div>
      <div className="flex flex-row">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2  h-10 w-10 flex items-center justify-center py-3 ${
            selected
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-blue-600"
          } `}
        >
          {/* Number {index} */} 1
        </div>
        <div className="pl-3">
          <h4 className="text-3xl font-medium">Personal Details</h4>
        </div>
      </div>
      <form
        onChange={handleSubmit(onChange)}
        className={` flex-auto border-l-2 transition duration-500 ease-in-out w-full pl-5 ml-5 pt-5 pb-10  ${
          selected && "border-blue-600"
        }`}
      >
        <div className="grid grid-cols-2 gap-5 relative">
          {/* Job Title Input */}
          <div className="mb-5">
            <label className="label flex flex-row justify-start">
              <span className="text-xl">Job Title:</span>
            </label>
            <select
              {...register(`${fieldINC.jobTitle}`, { required: true })}
              className="pl-1 text-lg outline-none border-b-2"
              defaultValue=""
            >
              {titles.map((title, index) => (
                <option value={`${title}`} key={index}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          {/* Image Input  */}
          <div className="border-2 border-dashed mx-10 border-zinc-500 rounded-xl absolute right-10 bottom-5 px-8 py-10">
            <div className="flex flex-col items-center">
              <h4>Your Photo</h4>
              {/* modal open btn */}
              <button
                className="btn btn-ghost btn-sm btn-active mt-3"
                onClick={() =>
                  document.getElementById("upload-img").showModal()
                }
              >
                Upload
              </button>
              {/* Modal Container */}
              <dialog
                id="upload-img"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box flex flex-col items-center">
                  <h3 className="font-bold text-lg">Crop Your Image</h3>
                  <Avatar
                    width={450}
                    height={295}
                    onCrop={onCrop}
                    onClose={onClose}
                  />
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-ghost btn-sm btn-active">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
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
            value={value}
            onChange={(e) => {
              field.onChange(e);
            }}
            render={({ field }) => (
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-xl">Phone Number:</span>
                </label>
                <PhoneInput
                  // TODO: Type Number is to be changed
                  // type="number"
                  placeholder="Ex: +8801300000000"
                  className=" pl-1 text-lg outline-none border-b-2"
                  required
                  name={field.name}
                  value={value}
                  // TODO: Phone Number input must pass by redux
                  // onChange={setValues}
                  onChange={(e) => {
                    field.onChange(e);
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
    personal: state.personalReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setPersonal: (personal) => dispatch(setPersonal(personal)),
    updatePersonal: (personal) => dispatch(updatePersonal(personal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalField);
