import React from "react";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>Learner</a>
      </li>
      <li>
        <a>Talent</a>
      </li>
      <li>
        <a>Company</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white rounded-xl px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case font-bold text-2xl">
          Employee Pro
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{navOptions}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <button className="btn btn-outline btn-info px-7">Log In</button>
        <button className="btn btn-info px-7 text-white">Join</button>
      </div>
    </div>
  );
};

export default NavBar;
