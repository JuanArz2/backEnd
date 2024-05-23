"use strict";

console.log("WorkS");
const express = require("express");

const servidor = express();

servidor.get("/", (solud, rta) => {
  rta.json({
    saludo: "Hi!",
  });
});

servidor.get("/xx", (solud, rta) => {
  rta.redirect(301, "https://www.jw.org/es/");
});

servidor.listen(3000);
console.log("Servidor puerto 3000");
