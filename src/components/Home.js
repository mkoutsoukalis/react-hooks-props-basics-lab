import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
