const express = require("express")
const centra = require("@aero/centra")
const app = express()

app.get("/", (req, res) => {
    echo = centra("http://127.0.0.1:8000").text()
    res.send(echo)
})

app.listen(8000, "0.0.0.0")