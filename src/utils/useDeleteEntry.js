import axios from "axios";

const URL = process.env.REACT_APP_URL;

export default function useDeleteEntry(
  currentCategory,
  id,
  authToken,
  setDeleteModal,
  setCounter,
  counter
) {
  const handleDeleteRecurring = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        await axios.delete(`${URL}${currentCategory}/${id}`, {
          headers: { Authorization: `Bearer: ${authToken}` },
        });

        setDeleteModal(false);
        setCounter(counter + 1);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  };

  return [handleDeleteRecurring];
}
