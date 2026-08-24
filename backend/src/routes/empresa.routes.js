"use strict"

import {Router} from "express";
import {getempresaA, getEmpresa, createEmpresa, updateEmpresa,deleteEmpresa} from "../controllers/empresa.controller.js"
import {authenticateJwt} from "../middlewares/authentication.middleware.js"
import {isAdmin} from "../middlewares/authorization.middleware.js"
const router = Router();

router.use(authenticateJwt)
router
    .get("/", getEmpresa)
    .get("/detail/", getempresaA) 
    .post("/", createEmpresa)
    .put("/:id", updateEmpresa)
    .delete("/:id", isAdmin, deleteEmpresa)

export default router;