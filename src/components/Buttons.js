import React from "react";

function Buttons({ keyCode, keyTrigger, id, url, handleClick }) {
  return <div className="drum-pad" onClick={handleClick} id={id}>
      {keyTrigger}
      <audio id={keyTrigger} src={url}></audio>
      </div>;
}

export default Buttons;
