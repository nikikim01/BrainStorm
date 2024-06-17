import React from "react";
import ReactDOM from "react-dom/client";

const sayHello = () => {
  return <h1>Hi</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<React.StrictMode>{sayHello()}</React.StrictMode>);
