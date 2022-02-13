import React from "react";

const Labels = (user) => {
  return (
    <div className="my-3 flex w-full flex-row items-center justify-center border-2 p-5">
      <label className="mr-6 flex rounded-md bg-red-500 py-1 px-2 text-white">
        Followers :<p className="ml-2">{user.followers}</p>
      </label>
      <label className="mr-6 flex rounded-md border-2 py-1 px-2">
        Following :<p className="ml-2">{user.following}</p>
      </label>
      <label className="mr-6 flex rounded-md bg-green-600 py-1 px-2 text-white">
        Public Repos :<p className="ml-2">{user.public_repos}</p>
      </label>
      <label className=" flex rounded-md bg-slate-800 py-1 px-2 text-white">
        Public Gists :<p className="ml-2">{user.public_gists}</p>
      </label>
    </div>
  );
};

export default Labels;
