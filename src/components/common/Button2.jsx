import React from "react";

function Button2(props) {
  return (
    <div>
      <a href={props.to} title="Click to visit" className="btnBlue">
        {props.btnname}
      </a>
    </div>
  );
}

export default Button2;
