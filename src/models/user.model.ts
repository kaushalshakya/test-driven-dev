import mongoose from "mongoose";
import { Roles } from "../types/enums/roles.enum";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: Roles,
    default: Roles.USER,
  },
});

export const User = mongoose.model("user", userSchema);
