import React from "react";

function Buttons({ keyCode, keyTrigger, id, url }) {
  return <div className="drum-pad" id={id}>
      {keyTrigger}
      <audio id={keyCode} src={url}></audio>
      </div>;
}

export default Buttons;
