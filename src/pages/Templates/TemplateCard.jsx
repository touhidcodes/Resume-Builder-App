import React from "react";
import { setTemplate, updateTemplate } from "../../Redux/Actions/setTemplate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TemplateCard = ({
  id,
  data,
  thumbnail,
  setTemplate,
  updateTemplate,
  resumeDataProps,
}) => {
  const template = { data, thumbnail };
  const TemplateData = resumeDataProps;

  const selectTemplate = () => {
    if (TemplateData !== null) {
      // Update
      updateTemplate(template);
    } else {
      // Set
      setTemplate(template);
    }
  };
  return (
    <div>
      <img src={thumbnail} alt="" className="h-96 w-96" />
      <Link to={`/resume/${id}`}>
        <button className="btn btn-primary mt-5" onClick={selectTemplate}>
          Use Templates
        </button>
      </Link>
    </div>
  );
};

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    resumeDataProps: state.templateReducer,
  };
};
// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setTemplate: (template) => dispatch(setTemplate(template)),
    updateTemplate: (template) => dispatch(updateTemplate(template)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateCard);
