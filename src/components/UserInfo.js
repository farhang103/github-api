import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Labels from "./label";

const UserInfo = () => {
  const { login } = useParams();
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error));

    axios.get(`https://api.github.com/users/${login}/repos`).then((repo) => {
      setRepo(repo.data).catch((error) => console.log(error));
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
      {Labels(user)}
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
