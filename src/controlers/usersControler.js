import UserModel from "../models/userModel.js";

const usersControler = {
  readAllUsers: async (req, res) => {
    try {
      const allUsers = await UserModel.find();
      res.json({
        state: "Successful",
        message: "All users readed",
        data: allUsers,
      });
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error reading all users" });
    }
  },

  createUser: async (req, res) => {
    try {
      if (req.body.name === "") throw new Error("Empty name");
      if (req.body.lastName === "") throw new Error("Empty last name");
      if (req.body.email === "") throw new Error("Empty email");
      if (req.body.userName === "") throw new Error("Empty user name");
      if (req.body.password === "") throw new Error("Empty password");
      if (req.body.confirmPassword === "")
        throw new Error("Empty password confirmation");
      if (req.body.userId === "") throw new Error("Empty id");
      if (req.body.telephone === "") throw new Error("Empty telephone");
      //if (req.body.gender === "") throw new Error("Empty gender");
      if (req.body.birthday === "") throw new Error("Empty birthday");
      //if (req.body.contry === "") throw new Error("Empty contry");
      //if (req.body.photo === "") throw new Error("Empty photo");

      const newUser = new UserModel(req.body);
      const createdUser = await newUser.save();
      if (createdUser._id) {
        res.json({
          state: "Successful",
          message: "User created",
          id: createdUser._id,
        });
      }
      console.log(createdUser);
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error creating user" });
    }
  },

  readUser: async (req, res) => {
    try {
      const readedUser = await UserModel.findById(req.params.id);
      if (readedUser._id) {
        res.json({
          state: "Successful",
          message: "User readed",
          data: readedUser,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error reading user" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (updatedUser._id) {
        res.json({
          state: "Successful",
          message: "User updated",
          data: updatedUser,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error updating user" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
      if (deleteUser._id) {
        res.json({
          state: "Successful",
          message: "User deleted",
          data: null,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error deleating user" });
    }
  },
};

export default usersControler;
