const usersControler = {
  readAllUsers: (req, res) => {
    res.json({ message: "Get, read all usears" });
  },
  createUser: (req, res) => {
    res.json({ message: "Post, create single user" });
  },
  readUser: (req, res) => {
    res.json({ message: "Get, read single user" });
  },
  updateUser: (req, res) => {
    res.json({ message: "Put, update single user" });
  },
  deleteUser: (req, res) => {
    res.json({ message: "Delete, delete single user" });
  },
};

export default usersControler;
