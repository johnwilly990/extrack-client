import axios from "axios";

const URL = process.env.REACT_APP_URL;

export default function useAddEntry(
  input,
  authToken,
  setaddModal,
  setCounter,
  setInput,
  counter,
  initialValues,
  currentCategory
) {
  const handleAddEntry = (e) => {
    e.preventDefault();

    if (!input.item_name || !input.category || input.amount === 0) return;

    const fetchData = async () => {
      try {
        await axios.post(
          `${URL}${currentCategory}`,
          {
            item_name: input.item_name,
            category: input.category,
            amount: Number(input.amount),
          },
          {
            headers: { Authorization: `Bearer: ${authToken}` },
          }
        );

        // Closes modal upon successful POST
        setaddModal(false);
        setCounter(counter + 1);
        setInput(initialValues);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  };

  return [handleAddEntry];
}
