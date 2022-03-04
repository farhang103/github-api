import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

// export default Request;

import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
// const Request = async (url) => {
//   const { setUserList } = useContext(UserContext);
//   await axios
//     .get(url)
//     .then((response) => {
//       if (response.data.total_count !== 0) {
//         console.log(response.data.items);
//       } else {
//         alert("No user found, Try again");
//       }
//     })
//     .catch((error) => console.log(error));
// };
