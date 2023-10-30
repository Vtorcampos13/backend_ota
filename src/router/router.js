import { Router } from "express";

import propietariosRouter from "./propietariosRouter.js";
import cochesRouter from "./cochesRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/propietarios",propietariosRouter);

router.use("/coches", cochesRouter);

router.use("/",authRouter);

export default router;