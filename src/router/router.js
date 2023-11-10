import { Router } from "express";

import multasRouter from "./multasRouter.js";
import parkingRouter from "./parkingRouter.js";
import zonaRouter from "./zonaRouter.js";
import cochesRouter from "./cochesRouter.js";
import adminRouter from "./adminRouter.js";
import authRouter from "./authRouter.js";
import historyRouter from "./historyRouter.js";

const router = Router();

router.use("/multas", multasRouter);

router.use("/zona",zonaRouter);

router.use("/coches", cochesRouter);

router.use("/parking", parkingRouter);

router.use("/admin", adminRouter);

router.use("/history", historyRouter);

router.use("/",authRouter);

export default router;