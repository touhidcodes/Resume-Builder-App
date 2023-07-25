import React, { useState } from "react";
import data from "../../../data/data";
import { Link } from "react-router-dom";
const Home = () => {
  const [allData, setAllData] = useState(data);
  console.log(allData);
  return (
    <div>
      This is bloody Home
      <div>
        <h4 className="text-4xl text-center">Select Templates</h4>
        <div className="grid grid-cols-2 gap-10">
          {allData.map((item) => (
            <div>
              <img src={item.thumbnail} alt="" className="h-96 w-96" />
              <Link to={`/resume/${item.id}`}>
                {" "}
                <button className="btn btn-primary mt-5">Use Templates</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
