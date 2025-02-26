// First file that runs after index.html is loaded
// in the browser

// Step-1: Import the React and ReactDOM libraries
// Library that defines what a component is, and how
// multiple components work together
import React from "react";
// Library that known how to get a component
// to show up in the browser
import ReactDOM from "react-dom/client";

import App from "./App";

// Step-2: Get a refrence to the div with ID root
const element = document.getElementById("root");

// Step-3: Tell React to take control of that element
const root = ReactDOM.createRoot(element);

// Step-4: Create a component
// Done in the App.js file

// Step-5: Show the component on the screen
root.render(<App />);
