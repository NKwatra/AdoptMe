import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return (
    <div>
      <h1>AdoptMe</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cockatiele"></Pet>
      <Pet name="Doink" animal="Cat" breed="Mixed"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
