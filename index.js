const express = require("express");
const util = require("./util");

const app = express();
const port = 3000;

app.get("/get", (req, res) => res.send({ result: util.sum(1, 2) }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
