import { Router } from "express";

import parkingRouter from "./parkingRouter.js";
import zonaRouter from "./zonaRouter.js";
import cochesRouter from "./cochesRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/zona",zonaRouter);

router.use("/coches", cochesRouter);

router.use("/parking", parkingRouter);

router.use("/",authRouter);

export default router;