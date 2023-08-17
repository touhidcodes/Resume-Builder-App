import React, { useState } from "react";
import data from "../../../data/data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setTemplate, updateTemplate } from "../../Redux/Actions/setTemplate";

const Templates = () => {
  const [resume, setResume] = useState(data);
  console.log(allData);
  return (
    <div>
      <div>
        <h4 className="text-4xl text-center">Select Your Templates</h4>
        <div className="grid grid-cols-2 gap-10">
          {resume.map((item) => (
            <div>
              <img src={item.thumbnail} alt="" className="h-96 w-96" />
              <Link to={`/resume/${item.id}`}>
                <button className="btn btn-primary mt-5">Use Templates</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* DEV Options */}
      <div>
        <Link to="template">
          <button className="btn btn-outline btn-error">See Template</button>
        </Link>
      </div>
    </div>
  );
};

// Map the Redux state to component props
const mapStateToProps = (state) => {
  return {
    resume: state.templateReducer,
  };
};

// Map the Redux dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setTemplate: (template) => dispatch(setTemplate(template)),
    updateTemplate: (template) => dispatch(updateTemplate(template)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
