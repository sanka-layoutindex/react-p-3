import React from "react";

function Button1(props) {
  return (
    <div className="nav-button">
      <a href={props.link} title="Click to visit" className="btnWhiteBorder">
        {props.btnname}
      </a>
    </div>
  );
}

export default Button1;
