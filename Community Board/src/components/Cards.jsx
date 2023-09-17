import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="individualCards">
        <h2>
          {props.sex} {props.weight} Champion
        </h2>
        <img src={props.img} alt="" />

        <a href={props.link}>Check my profile</a>
      </div>
    </>
  );
};

export default Cards;
