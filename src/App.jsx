import React from "react";
import { createRoot } from "react-dom/client";
import { ConfirmationDialogue } from "./components/ConfirmationDialogue";
import { Dashboard } from "./components/Dashboard";
import { store } from "./store/store";
import { Provider } from "react-redux"

const App = () => {
    return (
        <div>
            <Provider store={ store }>
                <Dashboard></Dashboard>
                <ConfirmationDialogue />
            </Provider>
        </div>
    )
};

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<App />);

export default App;