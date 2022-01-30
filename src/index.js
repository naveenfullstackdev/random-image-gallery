import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <>
    <h1>Welcome to the Random Image Gallery Website.</h1>
    <h2>
      Everytime You Refresh the Page New Images will be Displayed on Every Card.
    </h2>
    <App />
  </>,
  document.getElementById("root")
);
