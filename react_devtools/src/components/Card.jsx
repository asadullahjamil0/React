import React from "react";
import Avatar from "./Avatar";
import Heading from "./heading";
import Details from "./details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Heading name={props.name} />
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailsInfo={props.email} />
        <Details detailsInfo={props.tel} />
      </div>
    </div>
  );
}

export default Card;
