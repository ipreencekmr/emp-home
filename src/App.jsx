import React from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./components/Dashboard";
import { store } from "./store/store";
import { Provider } from "react-redux"

const App = () => (
    <div className="">
        <Dashboard></Dashboard>
    </div>
);

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<Provider store={ store }>
    <App />
</Provider>);

export default App;