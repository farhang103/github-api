import React from "react";
import { Link } from "react-router-dom";

const Profiles = ({ item }) => {
  return (
    <div className="rounded-md  border-2 border-gray-300 p-11">
      <div className=" flex  w-full flex-col items-center justify-center">
        <div className="h-28 w-28">
          <img src={item.avatar_url} alt="" className="rounded-full" />
        </div>
        <p className="mt-4 text-2xl font-bold">{item.login}</p>
        <Link
          to={`/user/${item.login}`}
          className="mt-5 flex w-40 justify-center rounded border-2 bg-slate-800 p-2 text-lg text-white hover:bg-red-600 hover:text-white"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default Profiles;
