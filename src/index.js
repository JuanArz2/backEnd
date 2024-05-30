import "dotenv/config";
import "./conectDataBase.js";
import server from "./server.js";

server.listen(3000); //3000, servidor
console.log("Servidor puerto 3000");
