import React from "react";
import { setTemplate, updateTemplate } from "../../Redux/Actions/setTemplate";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const TemplateCard = (props) => {
  const { id, type, thumbnail, data } = props;

  // const TemplateData = resume;
  const navigate = useNavigate();

  const selectTemplate = (data) => {
    console.log(props.resume);

    if (props.resume !== null) {
      // Update
      updateTemplate(data);
    } else {
      // Set
      setTemplate(data);
    }
    console.log(data);
  };
  console.log(props);
  return (
    <div>
      <img src={thumbnail} alt="" className="h-96 w-96" />
      <Link to={`/resume/${id}`}>
        <button
          className="btn btn-primary mt-5"
          onClick={() => {
            selectTemplate(data);
          }}
        >
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
