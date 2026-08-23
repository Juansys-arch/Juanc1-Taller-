"use strict"

import {Router} from "express";
import {getEmpresaA, getEmpresa, createEmpresa, updateEmpresa,deleteEmpresa} from "../controllers/empresa.controller.js"

const router = Router();

router
    .get("/", getEmpresa)
    .get("/detalle", getempresaA)
    .post("/", createEmpresa)
    .put("/:id", updateEmpresa)
    .delete("/:id", deleteEmpresa)

export default router;