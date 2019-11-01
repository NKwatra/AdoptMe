const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
