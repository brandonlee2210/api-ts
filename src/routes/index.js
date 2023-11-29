import { Router } from "express";

import productRouter from "./product.js";
import userRouter from "./user.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/", productRouter);
router.use("/", userRouter);
router.use("/", authRouter);

export default router;
