import * as React from "react";
import * as ReactDOM from "react-dom";
// Import de l'image
import LOGO from "./static/logo.jpg";

const Index = () => {
  return <div>TIW 8 TP1!<img src={LOGO} alt="Logo" /></div>;
};
ReactDOM.render(<Index />, document.getElementById("root"));