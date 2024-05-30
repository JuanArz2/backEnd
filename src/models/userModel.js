import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  userId: { type: String, required: true },
  telephone: { type: String, required: true },
  gender: { type: String, required: false },
  birthday: { type: Date, required: true },
  contry: { type: String, required: false },
  photo: { type: String, required: false },
});

export default model("User", userSchema);
