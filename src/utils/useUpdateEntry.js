import axios from "axios";

const URL = process.env.REACT_APP_URL;

export default function useUpdateEntry(
  currentCategory,
  id,
  data,
  authToken,
  setUpdateModal,
  setCounter,
  counter
) {
  const handleUpdate = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        await axios.put(
          `${URL}${currentCategory}/${id}`,
          {
            item_name: data.item_name,
            amount: Number(data.amount),
            category: data.category,
          },
          { headers: { Authorization: `Bearer: ${authToken}` } }
        );

        setUpdateModal(false);
        setCounter(counter + 1);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  };

  return [handleUpdate];
}
