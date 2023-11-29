import { Router } from "express";

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/UserController.js";

const userRouter = Router();

userRouter.get("/users", getAllUsers);

userRouter.post("/users", createUser);

userRouter.get("/users/:id", getUserById);

userRouter.put("/users/:id", updateUserById);

userRouter.delete("/users/:id", deleteUserById);

export default userRouter;
