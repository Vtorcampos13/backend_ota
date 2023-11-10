import { Router } from "express";

import zonaViewController from "../controllers/zona/zonaViewController.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,isAdmin,(req,res)=>{
    zonaViewController.getAll(req,res);
});

router.get("/new",zonaViewController.createForm);

router.get("/:id",(req,res)=>{
    zonaViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    zonaViewController.create(req,res);
});

router.get("/:id/delete",(req,res)=>{
    zonaViewController.remove(req,res);
});

export default router;
