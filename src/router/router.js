import { Router } from "express";

import propietariosRouter from "./propietariosRouter.js";
import operariosRouter from "./operariosRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/propietarios",propietariosRouter);

router.use("/operarios", operariosRouter);

router.use("/",authRouter);

export default router;