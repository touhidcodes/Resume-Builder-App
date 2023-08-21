import React from "react";
import { setTemplate, updateTemplate } from "../../Redux/Actions/setTemplate";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const TemplateCard = (props) => {
  const { id, type, thumbnail, data } = props;

  const selectTemplate = () => {
    if (props.resume !== null) {
      // Update
      props.updateTemplate(props);
    } else {
      // Set
      props.setTemplate(props);
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
    resume: state.templateReducer,
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
