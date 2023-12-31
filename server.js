const express = require("express");
const process = require("process")
const path = require("path");
const app = express();

// Serve static files from the "build" directory (generated by the React build process)
app.use(express.static(path.join(__dirname, "dist")));

// Route all requests to the "index.html" file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
const port = 3003;
app.listen(port, () => {
    console.log(`emp-home is running on port ${port}`);
});

process.on("SIGINT", () => {
    console.info(" > Interrupted")
    process.exit(0)
});
