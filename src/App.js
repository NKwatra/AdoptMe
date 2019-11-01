import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "AdoptMe"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockaitile"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Dog",
      breed: "Mixed"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
