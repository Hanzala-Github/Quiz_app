import React, { useRef } from "react";

function Start({ setUserName }) {
  const inputref = useRef();

  const handleButton = () => {
    inputref.current.value && setUserName(inputref.current.value);
  };

  return (
    <div className="start_container">
      <input
        className="startInput"
        placeholder="enter your name"
        type="name"
        ref={inputref}
      ></input>
      <button className="startBtn" onClick={handleButton}>
        Start
      </button>
    </div>
  );
}

export default Start;
