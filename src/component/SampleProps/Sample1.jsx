import { React, useState } from "react";

export default function Sample1() {
  const [counter, setCounter] = useState(0);

  function onHandleAdd() {
    setCounter(counter + 1);
  }
  function onHandleSub() {
    setCounter(counter - 1);
  }

  return (
    <>
      <div>
        <button onClick={onHandleAdd} className="bg-red-500 p-5">
          +
        </button>
        <a>{counter}</a>
        <button onClick={onHandleSub} className="bg-blue-500 p-5">
          -
        </button>
      </div>
    </>
  );
}
