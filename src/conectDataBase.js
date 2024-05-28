import mongoose from "mongoose";

mongoose // Promesa, async code. */
  .connect(
    "mongodb+srv://JuanArz2:...@juanarz2cluster.mvlnjui.mongodb.net/?retryWrites=true&w=majority&appName=JuanArz2Cluster"
  )
  .then((data) => {
    console.log("Database is conected");
  })
  .catch((error) => {
    console.log("Error, Database isn't conected");
  });
