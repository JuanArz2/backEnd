"use strict";

console.log("WorkS");
const express = require("express");

const servidor = express();

servidor.get("/", (solud, rta) => {
  // Solicitud Verbo HTTP: get. "/": raíz
  rta.json({
    saludo: "Hi, my friend! How r u?",
  });
});

servidor.get("/xx", (solud, rta) => {
  rta.redirect(301, "https://www.jw.org/es/");
});

servidor.listen(3000); //3000, servidor
console.log("Servidor puerto 3000");
