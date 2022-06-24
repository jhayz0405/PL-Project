import React from "react";
import Sample1 from "./SampleProps/Sample1";

export default function Login(props) {
  const { username, password, onHandleSignUp } = props;
  function handleClick() {
    let counter = 0;
    counter = counter + 1;
    console.log(counter);
  }

  return (
    <>
      <Sample1 />
      <div className="relative flex justify-center min-h-screen overflow-hidden bg-gray-500">
        <div className="bg-white w-full p-4 m-auto border-t border-blue-600 rounded-xl shadow-xl shadow-blue-400/20 lg:max-w-md">
          <h1 className="text-3xl font-extrabold text-center">LOGIN FORM</h1>
          <form className="mt-6">
            <div>
              {" "}
              <label className="block text-lg text-gray-700 font-semibold">
                Username
              </label>
              <input
                type="text"
                onChange={handleClick}
                className="mb-4 block w-full px-4 py-2 border rounded-lg focus: ring-blue-600 focus:outline-none focus:ring focus:opacity-50 text-black"
              ></input>
            </div>
            <div>
              {" "}
              <label className="block text-lg text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="text"
                className="mb-4 block  w-full px-4 py-2 border rounded-lg focus: ring-blue-600 focus:outline-none focus:ring focus:opacity-50"
              ></input>
            </div>
            <a
              href="#"
              className="font-light text-sm text-blue-900 hover:underline"
            >
              {" "}
              Forgot Password
            </a>
            <div>
              <button className="mt-10 text-xl font-semibold rounded-md w-full px-3 py-2 tracking-wide bg-blue-500 text-white transition-colors hover:bg-blue-600 duration-300">
                {" "}
                Login
              </button>
            </div>
          </form>
          <p className="text-sm font-light pt-4">
            {" "}
            Dont have an account?{" "}
            <a
              href="#"
              onClick={onHandleSignUp}
              className="font-semibold tracking-wide text-blue-500 hover:underline"
            >
              {" "}
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
