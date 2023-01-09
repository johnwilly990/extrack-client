import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import { loginInput } from "../constants";
import lock from "../assets/icons/lock.svg";

const initialValues = {
  username: "",
  password: "",
};

const URL = process.env.REACT_APP_URL;

const LoginForm = () => {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [input, setInput] = useState(initialValues);

  const navigate = useNavigate();

  // Handles input changes
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // Handles submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/login`, {
        username: input.username,
        password: input.password,
      });

      sessionStorage.setItem("authToken", res.data.token);
      setSubmitSuccess(true);
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch ({ response }) {
      setSubmitError(response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-babyGreen md:bg-white md:flex md:justify-center md:items-center md:px-6 md:py-12 md:mx-auto md:max-w-[768px] lg:max-w-[1280px] lg:px-[130px] lg:py-16"
    >
      <div className="px-6 py-8 md:bg-babyGreen md:w-full md:rounded md:shadow-xl  lg:px-[130px]">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-2xl mb-6">Login</h2>
          <p className="text-center text-onyx">
            Please enter your login credentials!
          </p>
        </div>
        <div className="flex flex-col relative">
          {loginInput.map((input, index) => {
            return (
              <>
                <Input
                  key={index}
                  {...input}
                  handleInputChange={handleInputChange}
                />
              </>
            );
          })}
        </div>
        {submitError && (
          <div className="text-red-600 text-sm">{submitError}</div>
        )}
        {submitSuccess && (
          <div className="text-green text-sm">Login successful!</div>
        )}
        <div className="md:flex md:justify-center">
          <button className="flex justify-center items-center w-full text-white rounded py-3 my-4 bg-green hover:bg-forestGreen md:w-[240px] md:mt-8">
            <img src={lock} alt="lock" className="mr-3" />
            Login
          </button>
        </div>

        <Link to="/forgot-password" className="flex justify-center">
          <p className="text-sm text-onyx text-center mb-4">Forgot password?</p>
        </Link>

        <div className="flex justify-center items-center">
          <p className="text-sm text-onyx">Don't have an account?</p>
          <Link
            to="/signup"
            className="underline ml-2 text-green text-sm hover:text-forestGreen"
          >
            Sign-up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
