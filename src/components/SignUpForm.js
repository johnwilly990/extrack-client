import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import { signUpInputName, signUpInput } from "../constants";
import lock from "../assets/icons/lock.svg";

const initialValues = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  confirm_password: "",
};

const URL = process.env.REACT_APP_URL;

const SignUpForm = () => {
  const [input, setInput] = useState(initialValues);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [inputError, setInputError] = useState(false);

  const navigate = useNavigate();

  // Handles input changes
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation for input fields
      if (input.password !== input.confirm_password) {
        setInputError(true);
      } else {
        // POST to server
        await axios.post(`${URL}register`, {
          username: input.username,
          password: input.password,
          first_name: input.first_name,
          last_name: input.last_name,
        });

        setSubmitSuccess(true);

        setTimeout(() => navigate("/dashboard"), 1500);
      }
    } catch (err) {
      setSubmitError(err.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-babyGreen md:bg-white md:flex md:justify-center md:items-center md:px-6 md:py-12 md:mx-auto md:max-w-[768px] lg:max-w-[1280px] lg:px-[130px] lg:py-16"
    >
      <div className="px-6 py-8 md:bg-babyGreen md:w-full md:rounded md:shadow-xl  lg:px-[130px]">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-2xl mb-6">Sign-Up</h2>
          <p className="text-center text-onyx">
            Please enter your information to start using ExTrack today!
          </p>
        </div>
        <div className="flex flex-col">
          <div className="md:flex">
            {signUpInputName.map((input, index) => (
              <Input
                key={index}
                {...input}
                handleInputChange={handleInputChange}
              />
            ))}
          </div>
          {signUpInput.map((input, index) => (
            <Input
              key={index}
              {...input}
              handleInputChange={handleInputChange}
              inputError={inputError}
            />
          ))}
          {/* Display message when passwords don't match */}
          <p className={inputError ? "text-red-600 text-sm" : "hidden"}>
            Password doesn't match
          </p>
          {/* Display message if all fields aren't filled out */}
          {submitError && (
            <div className="text-red-600 text-sm">{submitError}</div>
          )}
          {/* Display message upon successful sign-up */}
          {submitSuccess && (
            <div className="text-green text-sm">Successfully signed up!</div>
          )}
        </div>
        <div className="md:flex md:justify-center">
          <button className="flex justify-center items-center w-full text-white rounded py-3 my-4 bg-green hover:bg-forestGreen md:w-[240px] md:mt-8">
            <img src={lock} alt="lock" className="mr-3" />
            Create Account
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm text-onyx">Already have an account?</p>
          <Link
            to="/login"
            className="underline ml-2 text-green text-sm hover:text-forestGreen"
          >
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
