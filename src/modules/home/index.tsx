import React from "react";
import Card from "../../components/Card/card";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "40px",
            padding: "10px",
            opacity: "0.7",
            background:
              "linear-gradient(to right, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
          }}
        >
          <h1>PakemonAPI</h1>
        </div>
      </div>
      <hr />
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}></div>
      <Card />
    </>
  );
}

export default Home;
