import React from "react";

function Card(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content.toString(0, 100)}</p>
    </div>
  );
}

export default Card;
