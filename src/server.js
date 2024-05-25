/* const express = require("express"); */ // Manera antigua, sin el –"type": "module",–
import express from "express";
import usersRouter from "../src/routes/usersRouter.js";

const server = express();

server.use("/usuarios", usersRouter);

server.get("/", (req, res) => {
  // Solicitud Verbo HTTP: get. "/": ¡RAÍZ!
  res.redirect(301, "/usuarios");
});

export default server;

/* server.get("/", (req, res) => {
  res.status(404).send("No encontrado D:");
}); */

/* server.get("/xx", (solud, rta) => {
  //en el uso de la ruta 'xx' redirigir a:
  rta.redirect(301, "https://www.jw.org/es/");
}); */
