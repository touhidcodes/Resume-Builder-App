import React from "react";
import PersonalField from "../../components/PersonalField/PersonalField";
import ProfessionalField from "../../components/ProfessionalField/ProfessionalField";
import EducationField from "../../components/EducationField/EducationField";
import SkillField from "../../components/SkillField/SkillField";

const Form = () => {
  return (
    <div className="space-y-5">
      <h4 className="text-4xl text-center">Name Of CV</h4>
      <PersonalField />
      <ProfessionalField />
      <EducationField />
      <SkillField />
    </div>
  );
};

export default Form;
