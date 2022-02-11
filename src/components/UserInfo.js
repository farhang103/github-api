import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { login } = useParams();
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`).then((res) => {
      setUser(res.data);
    });

    axios.get(`https://api.github.com/users/${login}/repos`).then((repo) => {
      setRepo(repo.data);
    });
  }, [login]);

  return (
    <div className="m-auto h-full w-4/6">
      <div className="flex flex-row items-center ">
        <Link to="/" className="my-4 mr-3 bg-gray-100 p-2 text-lg text-black">
          Back To Search
        </Link>
        <label className="mr-2 text-lg">hireable : </label>
        <AiOutlineCheck />
      </div>

      <div className="grid w-full grid-cols-2 content-center border-2 p-4 ">
        <div className="mt-10 flex h-auto w-full flex-col items-center justify-center">
          <div className="h-44 w-44 ">
            <img src={user.avatar_url} alt="" className="rounded-full" />
          </div>
          <p className="mt-2 text-lg">{user.name}</p>
        </div>
        <div className="grid grid-rows-1">
          <h2 className=" mb-1 text-2xl font-bold">Bio :</h2>
          <p className="mb-4 text-lg">{user.bio}</p>
          <a
            href={user.html_url}
            className="mb-3 flex w-40 items-center justify-center bg-slate-800 p-2 text-white"
          >
            Visit Github Page
          </a>
          <label className="flex text-lg">
            Login :<p className="ml-2">{user.login}</p>
          </label>

          <label className="flex text-lg">
            Company :<p className="ml-2">{user.company}</p>
          </label>

          <label className="mb-3 flex text-lg">
            Website : <p className="ml-2">{user.html_url}</p>
          </label>
        </div>
      </div>
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
      {repo.map((item) => {
        return (
          <div
            key={item.id}
            className="mb-3 border-2 p-4 font-bold text-red-500"
          >
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserInfo;
