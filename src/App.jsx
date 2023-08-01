import React from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./components/Dashboard";

const App = () => (
    <div className="">
        <Dashboard></Dashboard>
    </div>
);

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<App />);

export default App;