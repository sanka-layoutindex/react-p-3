import React from "react";

function Button3(props) {
  return (
    <div className="nav-button-two">
      <a href={props.to} title="Click to visit">
        {props.btnname}
      </a>
    </div>
  );
}

export default Button3;
