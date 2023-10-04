import React from "react";
import PersonalField from "../../components/PersonalField/PersonalField";
import ProfessionalField from "../../components/ProfessionalField/ProfessionalField";
import EducationField from "../../components/EducationField/EducationField";
import SkillField from "../../components/SkillField/SkillField";
import SocialField from "../../components/SocialField/SocialField";
import SaveMyResume from "../../components/SaveMyResume/SaveMyResume";
import { Link } from "react-router-dom";
import AddMoreField from "../../components/AddMoreFields/AddMoreField";

const ResumeForm = () => {
  return (
    <div className="fixed overflow-y-scroll h-full">
      <div className="pr-8">
        <h4 className="text-4xl text-center mb-10">Name Of CV</h4>
        <PersonalField />
        <ProfessionalField />
        <EducationField />
        <SocialField />
        <SkillField />
        <AddMoreField />
        <SaveMyResume downloadResume />
        <div>
          <Link to="/preview">
            <button className="btn btn-primary">Preview</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
