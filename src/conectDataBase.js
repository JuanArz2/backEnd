import mongoose from "mongoose";

/* Promesa, async code. */ mongoose
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((data) => {
    console.log("Database is conected");
  })
  .catch((error) => {
    console.log("Error, Database isn't conected");
  });
