import React, { useState } from "react";
import data from "../../../data/data";
import { Link } from "react-router-dom";
const Home = () => {
  const [resume, setResume] = useState(data);

  return (
    <div>
      <div className="text-center">
        <Link to="templates">
          <button className="btn btn-outline btn-error">
            See All Template
          </button>
        </Link>
      </div>

      {/* DEV Options */}
      <div className="text-center mt-10">
        <h4>DEV Options</h4>
        <Link to="template">
          <button className="btn btn-outline btn-error">See Template</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
