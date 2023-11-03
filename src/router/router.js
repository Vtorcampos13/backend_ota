import { Router } from "express";

import zonaRouter from "./zonaRouter.js";
import cochesRouter from "./cochesRouter.js";
import adminRouter from "./adminRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/zona",zonaRouter);

router.use("/coches", cochesRouter);

router.use("/admin", adminRouter);

router.use("/",authRouter);

export default router;