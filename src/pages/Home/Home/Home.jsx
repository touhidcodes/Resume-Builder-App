import React, { useState } from "react";
import data from "../../../data/data";
import { Link } from "react-router-dom";
const Home = () => {
  const [resume, setResume] = useState(data);
  console.log(allData);
  return (
    <div>
      This is bloody Home
      <div>
        <h4 className="text-4xl text-center">Select Templates</h4>
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
    settemplate: (template) => dispatch(settemplate(template)),
    updatetemplate: (template) => dispatch(updatetemplate(template)),
  };
};

export default Home;
