import { Router } from "express";

import cochesViewController from "../controllers/coches/cochesViewController.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated, isAdmin,(req,res)=>{
    cochesViewController.getAll(req,res);
});

router.get("/new",cochesViewController.createForm);

router.get("/:id",isAuthenticated,(req,res)=>{
    cochesViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    cochesViewController.create(req,res);
});

router.get("/:id/edit",cochesViewController.updateForm);

router.post("/:id",(req,res)=>{
    cochesViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    cochesViewController.remove(req,res);
});

export default router;
