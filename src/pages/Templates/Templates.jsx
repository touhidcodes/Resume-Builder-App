import React, { useState } from "react";
import data from "../../data/data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setTemplate, updateTemplate } from "../../Redux/Actions/setTemplate";
import TemplateCard from "./TemplateCard";

const Templates = () => {
  const [resume, setResume] = useState(data);

  return (
    <div>
      <h4 className="text-4xl text-center">Select Your Templates</h4>
      <div className="grid grid-cols-2 gap-10">
        {resume.map((templates) => (
          <TemplateCard
            key={templates.key}
            id={templates.id}
            data={templates.data}
            thumbnail={templates.thumbnail}
          />
        ))}
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
