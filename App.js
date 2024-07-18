import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>this is title </h1>

const Heading = () => (
  <div id="container">
    <Title /> 
    <Title></Title>
    {Title()}
    {<Title />}
    <h1 id = "mainheading">This is heading compoennt</h1>
    {[<h1>bala</h1>,<h2>manikandan</h2>]}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
