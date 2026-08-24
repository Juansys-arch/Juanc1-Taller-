"use strict";
import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import empresaRoutes from "./empresa.routes.js";
const router = Router();

router
    .use("/auth", authRoutes)
    .use("/user", userRoutes)
    .use("/empresa", empresaRoutes);

export default router;