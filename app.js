// モジュール読み込みエクスプレス開始
const express = require("express");
const app = express();
app.get("/", (req,res) => {
    res.status(200).send("Hello World");

});
app.listen(3000);
