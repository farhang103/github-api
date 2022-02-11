import React from "react";
import { Link } from "react-router-dom";
import image from "../assests/github.png";

const Header = () => {
  return (
    <div>
      <nav className="flex flex-row p-4 text-white bg-red-600 text-xl w-full justify-evenly ">
        <div className="w-full ml-4 text-3xl font-semibold flex flex-row">
          <img className=" h-9 mr-4 " src={image} alt="" />
          <Link to="/">Github Search</Link>
        </div>
        <div className="w-full flex justify-end mr-10">
          <Link to="/" className="mr-10">
            Home
          </Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
