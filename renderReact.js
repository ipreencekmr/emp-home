require("babel-register")
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const App = require("./src/App");

module.exports = function(app) {
    app.get("*", (req, res) => {
        const rootApp = ReactDOMServer.renderToString(<App />);
        const indexFile = path.resolve("./dist/index.html");

        fs.readFile(indexFile, "utf8", (err, data) => {
            if (err) {
                console.error("Something went wrong:", err);
                return res.status(500).send("Oops, better luck next time!");
            }

            return res.send(
                data.replace("<div id=\"app\"></div>", `<div id="app">${rootApp}</div>`)
            );
        });
    });
}
