import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // state to toggle password visibility

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // toggle the state of password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };

  // handle input changes and save it to the data object
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle user login
  const onLogin = async (e) => {
    e.preventDefault();
    const password = data.password;
    const email = data.email;

    // password validation
    const isValidPassword =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (!isValidPassword) {
      console.log("Password does not meet the criteria");
      toast.error(
        "Password must be at least 8 characters long, and include uppercase letters, lowercase letters, digits, and special characters."
      );
      return;
    }

    // email validation
    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      console.log("email validation failed");
      toast.error("Please enter a valid email");
      return;
    }
    try {
      if (isValidPassword && isValidEmail) {
        toast.success("Credentials are correct");
        // api call and other details should be written here
        navigate("/Overview"); // skip the login and go to the next step
      }
    } catch (error) {
      console.log("error occurred", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex rounded-lg overflow-hidden w-112 h-96 bg-opacity-10 backdrop-filter backdrop-blur-md">
        <div className="p-10">
          <h2 className="text-2xl text-center font-semibold mb-4 text-white">
            Login
          </h2>

          {/* Login Form */}
          <form className="space-y-2" onSubmit={onLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                User email
              </label>
              <input
                required
                onChange={onChangeHandler}
                name="email"
                value={data.email}
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  onChange={onChangeHandler}
                  name="password"
                  value={data.password}
                  type={passwordVisible ? "text" : "password"}
                  className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 cursor-pointer"
                  onClick={togglePasswordVisibility}
                > {/* change the visibility of the password */}
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Create account{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
