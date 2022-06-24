import React, { useState } from "react";
import Login from "./component/Login";
function App() {
  const [showLogin, setShowLogin] = useState(true);

  function showNumber() {
    console.log("abc");
  }

  function onHandleSignUp() {
    setShowLogin(!showLogin);
  }

  return (
    <>
      {showLogin ? (
        <Login
          username="BSCS32A"
          password="CCS123"
          onHandleSignUp={onHandleSignUp}
        />
      ) : (
        <div>
          {" "}
          sorry page not yet working{" "}
          <button className="bg-blue-900 text-white" onClick={onHandleSignUp}>
            {" "}
            Back To Log in page
          </button>
        </div>
      )}
    </>
  );
}

export default App;
