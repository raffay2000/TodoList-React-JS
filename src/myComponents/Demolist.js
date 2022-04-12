import React from "react";

const Demolist = (props) => {
  return (
    <div className="bg-dark-blue br4 pa1  tc ma3 fl w-third grow">
      <div>
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="hello" />
        <h1 className="tc"> {props.name} </h1>
        <h3 className="tc"> {props.work} </h3>
      </div>
    </div>
  );
};
export default Demolist;
