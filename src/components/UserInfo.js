import axios from "axios";
import React, { useEffect, useState } from "react";
import Info from "./Info";
import { useParams } from "react-router-dom";
import Labels from "./Labels";
import Repos from "./Repos";

const UserInfo = () => {
  const { login } = useParams();
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const prom1 = axios.get(`https://api.github.com/users/${login}`);
    const prom2 = axios.get(`https://api.github.com/users/${login}/repos`);

    Promise.all([prom1, prom2])
      .then(([info, repo]) =>
        Promise.all([setUser(info.data), setRepo(repo.data)])
      )
      .catch((error) => console.log(error));
  }, [login]);

  return (
    <div className="m-auto h-full w-4/6">
      <Info user={user} />
      <Labels user={user} />
      {repo.map((item) => {
        return <Repos item={item} key={item.id} />;
      })}
    </div>
  );
};

export default UserInfo;
