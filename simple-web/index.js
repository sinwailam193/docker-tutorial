const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
    res.send("Hi world");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
