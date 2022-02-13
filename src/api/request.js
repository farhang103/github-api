import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const useRequest = async (url) => {
  const { setValue } = useContext(UserContext);
  await axios
    .get(url)
    .then((response) => {
      if (response.data.total_count !== 0) {
        console.log(setValue(response.data.items));
      } else {
        alert("No user found, Try again");
      }
    })
    .catch((error) => console.log(error));
};

export default Request;
