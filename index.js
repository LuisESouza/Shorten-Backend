const express = require('express');
const shortenLink = require('./src/router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => { res.json({ message: "Funcionando!" }) });
app.use("/api", shortenLink);

app.listen(4004, () => {
    console.log("Servidor iniciado em http://localhost:4004");
});
