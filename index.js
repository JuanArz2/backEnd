"use strict";

console.log("WorkS");
const express = require("express");

const servidor = express();

servidor.get("/", (solud, rta) => {
  rta.json({
    saludo: "Hi!",
  });
});

servidor.listen(3000);
console.log("Servidor puerto 3000");
