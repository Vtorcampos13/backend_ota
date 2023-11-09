import { Router } from "express";

import historyViewController from "../controllers/history/historyViewController.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    historyViewController.getAll(req,res);
}); 


export default router;
