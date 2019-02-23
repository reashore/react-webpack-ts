import * as React from "react";
import * as ReactDOM from "react-dom";

const App: React.SFC = () => {
  return <h1>My React and TypeScript3 App</h1>;
};

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.render(<App />, root);
