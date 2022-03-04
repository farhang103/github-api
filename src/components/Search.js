import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import Form from "./Form";
import Profiles from "./Profiles";

const Search = () => {
  const { userList } = useContext(UserContext);

  return (
    <div className="m-auto h-full w-4/6 ">
      <Form />

      <div className="mt-6 grid w-full grid-cols-3 gap-4">
        {userList.map((item) => {
          return <Profiles item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Search;
