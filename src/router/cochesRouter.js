import { Router } from "express";

import cochesViewController from "../controllers/coches/cochesViewController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    cochesViewController.getAll(req,res);
});

router.get("/:id",(req,res)=>{
    cochesViewController.getById(req,res);
});

router.get("/new",cochesViewController.createForm);

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
