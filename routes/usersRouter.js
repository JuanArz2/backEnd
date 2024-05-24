import { Router } from "express";
import usersControler from "../controlers/usersControler.js";

const usersRouter = Router();

usersRouter.get("/", usersControler.readAllUsers);

usersRouter.post("/", usersControler.createUser);

usersRouter.get("/:id", usersControler.readUser);

usersRouter.put("/:id", usersControler.updateUser);

usersRouter.delete("/:id", usersControler.deleteUser);

export default usersRouter;
