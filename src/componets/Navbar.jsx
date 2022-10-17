import React from 'react';

function Navbar() {
  return (
    <div className="navbar-container shadow-lg flex justify-between w-screen h-14 items-center">
      <div className="navbar-left pl-10">
        <div className="navbar-logo w-full text-3xl  font-mono font-bold  ">
          Study-tonight
        </div>
      </div>
      <div className="navbar-right  w-1/3">
        <ul className="navbar-list flex justify-between  pr-10 items-center">
          <li className="home">Home</li>
          <li className="notes">Notes</li>
          <li className="upload bg-blue-500 text-white rounded-sm shadow-lg font-semibold px-2  py-1">
            Upload Notes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
