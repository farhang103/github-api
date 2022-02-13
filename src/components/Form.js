import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { useRequest } from "../api/request";

const Form = () => {
  const [username, setUsername] = useState("");
  const { setValue } = useContext(UserContext);

  const handleReset = () => {
    setValue([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // useRequest(`https://api.github.com/search/users?q=${username}`);

    axios
      .get(`https://api.github.com/search/users?q=${username}`)
      .then((response) => {
        if (response.data.total_count !== 0) {
          setValue(response.data.items);
        } else {
          alert("No user found, Try again");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form
        className="flex flex-col"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Users..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="mt-10 w-full rounded-md border-2 border-red-600 p-4 text-xl"
          required
        />
        <button
          type="submit"
          className="mt-5 rounded border-2 border-red-600 bg-slate-800 p-2 text-lg text-white hover:bg-red-600 hover:text-white"
        >
          Submit
        </button>
        {/* {username.length === 0 ? } */}
        <button
          onClick={handleReset}
          type="reset"
          className="mt-3 rounded border-2 border-red-600 bg-gray-600 p-2 text-lg text-white  hover:bg-red-600 hover:text-white"
          disabled={
            username === 0
              ? console.log("deactive", username)
              : console.log("active", username)
          }
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
