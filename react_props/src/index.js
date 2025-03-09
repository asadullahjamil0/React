import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="style-text">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Archibald"
      img="https://blackhistorywall.wordpress.com/wp-content/uploads/2011/02/picture-device-independent-bitmap-117.jpg"
      tel="+123 456 789"
      email="a@Archibald.com"
      alt="avatar_img"
    />

    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
      alt="avatar_img"
    />
    <Card />

    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
      alt="avatar_img"
    />
    <Card />
  </div>,
  document.getElementById("root")
);
