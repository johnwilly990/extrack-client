import { useState, useEffect } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_URL;

export default function useGetData(authToken, currentPage) {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await axios.get(`${URL}${currentPage}`, {
          headers: { Authorization: `Bearer: ${authToken}` },
        });

        setData(entries.data);
        setCounter(counter + 1);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [authToken, currentPage, counter]);

  return [data, counter];
}
