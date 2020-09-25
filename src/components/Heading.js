import React from "react";

function Heading(props) {
  return (
    <>
      <h3 className="head">{props.content}</h3>
      <h2 className="head-2">{props.content2}</h2>
    </>
  );
}

export default Heading;
