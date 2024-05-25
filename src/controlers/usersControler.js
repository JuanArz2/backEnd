const usersControler = {
  readAllUsers: async (req, res) => {
    try {
      res.json({ message: "Get, read all usears" });
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error al leer todos los usuarios." });
    }
  },

  createUser: async (req, res) => {
    try {
      console.log("Solicitud Body:", req.body);
      if (req.body.name === "") throw new Error("Empty name");
      if (req.body.lastName === "") throw new Error("Empty last name");
      if (req.body.email === "") throw new Error("Empty email");
      if (req.body.userName === "") throw new Error("Empty user name");
      if (req.body.password === "") throw new Error("Empty password");
      if (req.body.confirmPassword === "")
        throw new Error("Empty password confirmation");
      if (req.body.userId === "") throw new Error("Empty id");
      if (req.body.telephone === "") throw new Error("Empty telephone");
      if (req.body.gender === "") throw new Error("Empty gender");
      if (req.body.birthday === "") throw new Error("Empty birthday");
      if (req.body.contry === "") throw new Error("Empty contry");
      if (req.body.photo === "") throw new Error("Empty photo");
      res.json({ message: "Post, create single user" });
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error al crear usuario." });
    }
  },

  readUser: async (req, res) => {
    try {
      console.log("id: ", req.params.id);
      res.json({ message: "Get, read single user" });
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error al leer un usuario." });
    }
  },

  updateUser: async (req, res) => {
    try {
      console.log("id: ", req.params.id);
      console.log("Solicitud Body:", req.body);
      res.json({ message: "Put, update single user" });
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error al actualiar el usuario." });
    }
  },

  deleteUser: async (req, res) => {
    try {
      console.log("id: ", req.params.id);
      console.log("userId:", req.body.userId);
      res.json({ message: "Delete, delete single user" });
    } catch (error) {
      console.log("Error: ", error);
      res.json({ error: true, message: "Error al eliminar el usuario." });
    }
  },
};

export default usersControler;

/* const user = {
  name: "Juan",
  lastName: "Ariza",
  email: "juan@ariza.com",
  userName: "juanArz2",
  password: "xx22",
  confirmPassword: "xx22",
  userId: "123567890",
  telephone: "0001110000",
  gender: "male",
  birthday: "dd.mm.yy",
  contry: "COL",
  photo: "./assets/imgs/juanArizaImg.jpeg",
}; */
